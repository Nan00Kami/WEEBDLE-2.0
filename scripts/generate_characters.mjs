import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("Missing GEMINI_API_KEY environment variable.");
  process.exit(1);
}

// 1. Read master anime catalog
const animeFilePath = path.join(__dirname, "../animeData.js");
const animeContent = fs.readFileSync(animeFilePath, "utf8");
const animeMatch = animeContent.match(/const MASTER_ANIME_DATA = (\[[\s\S]*?\]);/);
if (!animeMatch) {
  console.error("Could not parse MASTER_ANIME_DATA from animeData.js");
  process.exit(1);
}
const MASTER_ANIME_DATA = eval(animeMatch[1]);

// 2. Read or initialize animeData2.js
const charFilePath = path.join(__dirname, "../animeData2.js");
let existingCharacters = [];

if (fs.existsSync(charFilePath)) {
  const charContent = fs.readFileSync(charFilePath, "utf8").trim();
  if (charContent.length > 0) {
    const charMatch = charContent.match(/const MASTER_CHARACTER_DATA = (\[[\s\S]*?\]);/);
    if (charMatch) {
      try {
        existingCharacters = eval(charMatch[1]);
      } catch (e) {
        console.warn("Could not parse animeData2.js, resetting to empty array.");
        existingCharacters = [];
      }
    }
  }
}

console.log(`Starting with ${existingCharacters.length} existing characters.`);

function saveCheckpoint(characters) {
  const output = `// animeData2.js - Master Character Catalog\nconst MASTER_CHARACTER_DATA = ${JSON.stringify(characters, null, 2)};\n`;
  fs.writeFileSync(charFilePath, output, "utf-8");
}

async function fetchBatch(animeBatch, startId) {
  const prompt = `
You are an expert anime database builder.
For each of these anime shows, select exactly 3 iconic characters:
${JSON.stringify(animeBatch.map(a => ({ title: a.title, genres: a.genres })))}

Return ONLY a raw JSON array adhering strictly to this structure:
[
  {
    "id": ${startId},
    "name": "Character Name",
    "anime": "Exact Anime Title From Input",
    "genres": ["Action"],
    "gender": "Male",
    "beatsGoku": false,
    "image": "https://img.anili.st/media/1"
  }
]

Requirements:
- Increment "id" sequentially starting at ${startId}.
- "beatsGoku" is true ONLY for conceptual reality-warpers, multiversal gods, or causality erasers. False for normal/superhuman fighters.
- Output ONLY valid raw JSON array, without markdown backticks or commentary.
`;

  // Standard v1beta generateContent endpoint
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`HTTP ${res.status}: ${errBody}`);
  }

  const data = await res.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error("No candidate text returned by Gemini");

  const cleaned = rawText.trim().replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
  return JSON.parse(cleaned);
}

async function run() {
  const BATCH_SIZE = 5;
  const processedTitles = new Set(existingCharacters.map(c => c.anime.toLowerCase()));
  const remainingAnime = MASTER_ANIME_DATA.filter(a => !processedTitles.has(a.title.toLowerCase()));

  console.log(`${remainingAnime.length} of ${MASTER_ANIME_DATA.length} anime remain to be cataloged.`);

  let currentId = existingCharacters.length > 0
    ? Math.max(...existingCharacters.map(c => c.id)) + 1
    : 1;

  for (let i = 0; i < remainingAnime.length; i += BATCH_SIZE) {
    const chunk = remainingAnime.slice(i, i + BATCH_SIZE);
    const titles = chunk.map(c => c.title).join(", ");
    console.log(`\n[Batch ${Math.floor(i / BATCH_SIZE) + 1}] Generating for: ${titles}...`);

    let attempts = 0;
    let success = false;

    while (attempts < 3 && !success) {
      try {
        const batch = await fetchBatch(chunk, currentId);
        if (Array.isArray(batch) && batch.length > 0) {
          existingCharacters.push(...batch);
          currentId += batch.length;
          saveCheckpoint(existingCharacters);
          console.log(`  Saved batch. Catalog now has ${existingCharacters.length} characters.`);
          success = true;
        } else {
          throw new Error("Invalid or empty response format");
        }
      } catch (err) {
        attempts++;
        console.warn(`  Attempt ${attempts} failed (${err.message}). Retrying in 4s...`);
        await new Promise(r => setTimeout(r, 4000));
      }
    }

    await new Promise(r => setTimeout(r, 3000));
  }

  console.log(`\nFinished! Total characters stored: ${existingCharacters.length}`);
}

run().catch(err => {
  console.error("Workflow failed with error:", err);
  process.exit(1);
});
