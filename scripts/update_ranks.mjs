import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.join(__dirname, "../animeData.js");

// Load current animeData.js
const fileContent = fs.readFileSync(dataFilePath, "utf8");
const match = fileContent.match(/const MASTER_ANIME_DATA = (\[[\s\S]*?\]);/);
if (!match) {
  console.error("Could not parse MASTER_ANIME_DATA.");
  process.exit(1);
}
const catalog = eval(match[1]);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchMalRank(title) {
  const cleanTitle = title.replace(/\s*\(\d{4}\)/, "").trim();
  const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(cleanTitle)}&limit=1`;

  try {
    const res = await fetch(url);
    if (res.status === 429) {
      console.warn("Rate limited, waiting 4s...");
      await sleep(4000);
      return fetchMalRank(title);
    }
    const data = await res.json();
    if (data.data && data.data.length > 0 && data.data[0].rank) {
      return data.data[0].rank;
    }
  } catch (err) {
    console.error(`Error querying ${title}:`, err.message);
  }
  return null;
}

async function run() {
  console.log(`Updating exact MAL Top Score ranks for ${catalog.length} titles...`);

  for (let i = 0; i < catalog.length; i++) {
    const anime = catalog[i];
    const liveRank = await fetchMalRank(anime.title);

    if (liveRank !== null) {
      console.log(`[${i + 1}/${catalog.length}] ${anime.title}: #${anime.rank} -> #${liveRank}`);
      anime.rank = liveRank;
    } else {
      console.log(`[${i + 1}/${catalog.length}] Keeping existing rank for: ${anime.title}`);
    }

    // Jikan rate limit buffer (3 requests/second)
    await sleep(750);
  }

  const updatedCode = `// animeData.js - Master Anime Catalog for Weebdle\nconst MASTER_ANIME_DATA = ${JSON.stringify(catalog, null, 2)};\n`;
  fs.writeFileSync(dataFilePath, updatedCode, "utf8");
  console.log("\nFinished! animeData.js has been updated with exact MAL ranks.");
}

run();
