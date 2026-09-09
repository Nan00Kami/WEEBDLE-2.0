const fs = require('fs');
const path = require('path');
const https = require('https');

const dataFilePath = path.join(__dirname, '../animeData2.js');
const imgDir = path.join(__dirname, '../images/characters');

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Read animeData2.js
const fileContent = fs.readFileSync(dataFilePath, 'utf8');
const arrayMatch = fileContent.match(/const MASTER_CHARACTER_DATA = (\[[\s\S]*?\]);/);

if (!arrayMatch) {
  console.error("Could not parse MASTER_CHARACTER_DATA in animeData2.js");
  process.exit(1);
}

const characters = eval(arrayMatch[1]);

async function queryAniList(name) {
  const query = `
    query ($search: String) {
      Character(search: $search) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  `;

  const response = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: { search: name }
    })
  });

  const json = await response.json();
  if (json.data && json.data.Character && json.data.Character.image) {
    return json.data.Character.image.large;
  }
  return null;
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download: Status code ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  console.log(`Processing ${characters.length} characters...`);

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    const safeName = char.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const filename = `${char.id}_${safeName}.png`;
    const localRelativePath = `images/characters/${filename}`;
    const localFullPath = path.join(imgDir, filename);

    console.log(`[${i + 1}/${characters.length}] Searching: ${char.name}...`);

    try {
      const remoteUrl = await queryAniList(char.name);
      if (remoteUrl) {
        await downloadImage(remoteUrl, localFullPath);
        char.image = localRelativePath;
        console.log(`  Saved to ${localRelativePath}`);
      } else {
        console.warn(`  No image found on AniList for: ${char.name}`);
      }
    } catch (err) {
      console.error(`  Error processing ${char.name}:`, err.message);
    }

    // Rate-limit buffer for AniList API
    await sleep(750);
  }

  // Write updated data back to animeData2.js
  const updatedCode = `// animeData2.js - Master Character Catalog for Anidle Character Mode\nconst MASTER_CHARACTER_DATA = ${JSON.stringify(characters, null, 2)};\n`;
  fs.writeFileSync(dataFilePath, updatedCode, 'utf8');
  console.log("Successfully updated animeData2.js with local paths!");
}

run();
