import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("Missing GEMINI_API_KEY in environment variables.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

// 1. Load animeData.js
const animeFilePath = path.join(__dirname, "../animeData.js");
const animeContent = fs.readFileSync(animeFilePath, "utf8");
const animeMatch = animeContent.match(/const MASTER_ANIME_DATA = (\[[\s\S]*?\]);/);
if (!animeMatch) {
  console.error("Could not parse MASTER_ANIME_DATA from animeData.js");
  process.exit(1);
}
const MASTER_ANIME_DATA = eval(animeMatch[1]);

// 2. Load existing animeData2.js to find where we left off
const charFilePath = path.join(__dirname, "../animeData2.js");
let existingCharacters = [];

if (fs.existsSync(charFilePath)) {
  const charContent = fs.readFileSync(charFilePath, "utf8");
  const charMatch = charContent.match(/const MASTER_CHARACTER_DATA = (\[[\s\S]*?\]);/);
  if (charMatch) {
    try {
      existingCharacters = eval(charMatch[1]);
    } catch (e) {
      existingCharacters = [];
    }
  }
}

console.log(`Starting with ${existingCharacters.length} existing characters in animeData2.js.`);

function saveCheckpoint(characters) {
  const output = `// animeData2.js - Master Character Catalog\nconst MASTER_CHARACTER_DATA = ${JSON.stringify(characters, null, 2)};\n`;
  fs.writeFileSync(charFilePath, output, "utf-8");
}

async function fetchBatch(animeBatch, startId) {
  const prompt = `
For each of these anime shows, select exactly 3 iconic/popular characters:
${JSON.stringify(animeBatch.map(a => ({ title: a.title, genres: a.genres })))}

Return a raw JSON array matching this schema:
[
  {
    "id": ${startId},
    "name": "Character Name",
    "anime": "Exact Anime Title From Input",
    "genres": ["Action"],
    "gender": "Male" or "Female",
    "beatsGoku": false,
    "image": "https://static.wikia.nocookie.net/... or https://static.wikitide.net/... direct portrait image link"
  }
]

Requirements:
- Increment "id" sequentially starting at ${startId}.
- "beatsGoku" is true ONLY for conceptual reality-warpers, multiversal gods, or causality erasers. False for all others.
- "image" must be a direct static wikia/wikitide image URL.
- Output ONLY valid raw JSON array, without markdown backticks or commentary.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json"
    }
  });

  const cleanedText = response.text.trim().replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
  return JSON.parse(cleanedText);
}

async function run() {
  const BATCH_SIZE = 5; // 5 shows = 15 characters per iteration for safety
  const processedTitles = new Set(existingCharacters.map(c => c.anime.toLowerCase()));
  
  // Filter for anime that haven't been completed yet
  const remainingAnime = MASTER_ANIME_DATA.filter(a => !processedTitles.has(a.title.toLowerCase()));

  console.log(`${remainingAnime.length} of ${MASTER_ANIME_DATA.length} anime remain to be processed.`);

  let currentId = existingCharacters.length > 0 
    ? Math.max(...existingCharacters.map(c => c.id)) + 1 
    : 1;

  for (let i = 0; i < remainingAnime.length; i += BATCH_SIZE) {
    const chunk = remainingAnime.slice(i, i + BATCH_SIZE);
    const titles = chunk.map(c => c.title).join(", ");
    console.log(`[Batch ${Math.floor(i / BATCH_SIZE) + 1}] Processing: ${titles}...`);

    let attempts = 0;
    let success = false;

    while (attempts < 3 && !success) {
      try {
        const batchCharacters = await fetchBatch(chunk, currentId);
        
        if (Array.isArray(batchCharacters) && batchCharacters.length > 0) {
          existingCharacters.push(...batchCharacters);
          currentId += batchCharacters.length;
          
          // Save directly to disk after each batch
          saveCheckpoint(existingCharacters);
          console.log(`  Saved batch. Total characters now: ${existingCharacters.length}`);
          success = true;
        } else {
          throw new Error("Empty array returned.");
        }
      } catch (err) {
        attempts++;
        console.warn(`  Attempt ${attempts} failed: ${err.message}. Retrying in 4s...`);
        await new Promise(r => setTimeout(r, 4000));
      }
    }

    // Rate-limit buffer between API calls
    await new Promise(r => setTimeout(r, 3000));
  }

  console.log(`All operations finished. Total characters: ${existingCharacters.length}`);
}

run().catch(err => {
  console.error("Workflow failed with error:", err);
  process.exit(1);
});
