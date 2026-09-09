import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY environment variable.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

// Load animeData.js
const animeFilePath = path.join(__dirname, "../animeData.js");
const animeContent = fs.readFileSync(animeFilePath, "utf8");
const arrayMatch = animeContent.match(/const MASTER_ANIME_DATA = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
  console.error("Could not parse MASTER_ANIME_DATA from animeData.js");
  process.exit(1);
}
const MASTER_ANIME_DATA = eval(arrayMatch[1]);

const BATCH_SIZE = 15;
let allCharacters = [];

async function generateBatch(animeBatch, startingId) {
  const prompt = `
For each anime title, pick the 3 most iconic characters:
${JSON.stringify(animeBatch.map(a => ({ title: a.title, genres: a.genres })))}

Strict Requirements:
- Starting character ID: ${startingId}
- Field "beatsGoku": boolean (true only for conceptual/multiversal reality warpers or causality erasers, false otherwise)
- Field "image": A direct, valid static portrait URL from static.wikia.nocookie.net or static.wikitide.net
- Field "gender": "Male" or "Female"
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.INTEGER },
            name: { type: Type.STRING },
            anime: { type: Type.STRING },
            genres: { type: Type.ARRAY, items: { type: Type.STRING } },
            gender: { type: Type.STRING },
            beatsGoku: { type: Type.BOOLEAN },
            image: { type: Type.STRING }
          },
          required: ["id", "name", "anime", "genres", "gender", "beatsGoku", "image"]
        }
      }
    }
  });

  return JSON.parse(response.text.trim());
}

async function run() {
  console.log(`Starting generation for ${MASTER_ANIME_DATA.length} anime...`);
  let currentId = 1;

  for (let i = 0; i < MASTER_ANIME_DATA.length; i += BATCH_SIZE) {
    const slice = MASTER_ANIME_DATA.slice(i, i + BATCH_SIZE);
    console.log(`Processing shows ${i + 1} to ${Math.min(i + BATCH_SIZE, MASTER_ANIME_DATA.length)}...`);

    try {
      const batchResult = await generateBatch(slice, currentId);
      allCharacters.push(...batchResult);
      currentId += batchResult.length;
    } catch (err) {
      console.error(`Error processing batch at index ${i}:`, err.message);
    }

    // 2-second rate-limit buffer
    await new Promise(r => setTimeout(r, 2000));
  }

  const output = `// animeData2.js - Master Character Catalog\nconst MASTER_CHARACTER_DATA = ${JSON.stringify(allCharacters, null, 2)};\n`;
  const destPath = path.join(__dirname, "../animeData2.js");
  fs.writeFileSync(destPath, output, "utf-8");
  console.log(`Finished! Generated ${allCharacters.length} characters in animeData2.js.`);
}

run();
