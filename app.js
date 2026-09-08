// Pre-seeded high-ranking anime (2010-2026) for instant offline matching & fallback
const POPULAR_ANIME_SEED = [
  { id: 1, title: "Steins;Gate", year: 2011, rank: 3, genres: ["Drama", "Sci-Fi", "Suspense"], image: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg" },
  { id: 2, title: "Hunter x Hunter (2011)", year: 2011, rank: 9, genres: ["Action", "Adventure", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1337/99791.jpg" },
  { id: 3, title: "Attack on Titan", year: 2013, rank: 110, genres: ["Action", "Suspense"], image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg" },
  { id: 4, title: "Your Name.", year: 2016, rank: 11, genres: ["Award Winning", "Drama", "Supernatural"], image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg" },
  { id: 5, title: "Demon Slayer: Kimetsu no Yaiba", year: 2019, rank: 127, genres: ["Action", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg" },
  { id: 6, title: "Jujutsu Kaisen", year: 2020, rank: 80, genres: ["Action", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg" },
  { id: 7, title: "Frieren: Beyond Journey's End", year: 2023, rank: 1, genres: ["Adventure", "Drama", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg" },
  { id: 8, title: "Chainsaw Man", year: 2022, rank: 160, genres: ["Action", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg" },
  { id: 9, title: "Bocchi the Rock!", year: 2022, rank: 25, genres: ["Comedy"], image: "https://cdn.myanimelist.net/images/anime/1448/127956.jpg" },
  { id: 10, title: "Vinland Saga", year: 2019, rank: 35, genres: ["Action", "Adventure", "Drama"], image: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg" },
  { id: 11, title: "Mob Psycho 100", year: 2016, rank: 62, genres: ["Action", "Comedy", "Supernatural"], image: "https://cdn.myanimelist.net/images/anime/8/80356.jpg" },
  { id: 12, title: "A Silent Voice", year: 2016, rank: 19, genres: ["Award Winning", "Drama"], image: "https://cdn.myanimelist.net/images/anime/1122/96442.jpg" },
  { id: 13, title: "Oshi no Ko", year: 2023, rank: 82, genres: ["Drama", "Supernatural"], image: "https://cdn.myanimelist.net/images/anime/1813/138369.jpg" },
  { id: 14, title: "Solo Leveling", year: 2024, rank: 250, genres: ["Action", "Adventure", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1370/140362.jpg" },
  { id: 15, title: "The Apothecary Diaries", year: 2023, rank: 40, genres: ["Drama", "Mystery"], image: "https://cdn.myanimelist.net/images/anime/1708/138033.jpg" },
  { id: 16, title: "Violet Evergarden", year: 2018, rank: 42, genres: ["Drama", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg" },
  { id: 17, title: "Kaguya-sama: Love is War", year: 2019, rank: 55, genres: ["Comedy", "Romance"], image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg" },
  { id: 18, title: "Cyberpunk: Edgerunners", year: 2022, rank: 74, genres: ["Action", "Sci-Fi"], image: "https://cdn.myanimelist.net/images/anime/1818/126435.jpg" },
  { id: 19, title: "Dungeon Meshi", year: 2024, rank: 115, genres: ["Adventure", "Comedy", "Fantasy"], image: "https://cdn.myanimelist.net/images/anime/1460/140356.jpg" },
  { id: 20, title: "Kaiju No. 8", year: 2024, rank: 310, genres: ["Action", "Sci-Fi"], image: "https://cdn.myanimelist.net/images/anime/1770/141334.jpg" }
];

let animeDatabase = [...POPULAR_ANIME_SEED];
let targetAnime = null;
let guesses = [];
const MAX_GUESSES = 6;

// Deterministic Daily Selector (Wordle method: same target for everyone each day)
function getDailyAnime() {
  const epoch = new Date(2024, 0, 1).getTime();
  const today = new Date().setHours(0,0,0,0);
  const dayIndex = Math.floor((today - epoch) / (1000 * 60 * 60 * 24));
  return animeDatabase[dayIndex % animeDatabase.length];
}

// Jikan API Auto-Fetch to build out the 500 catalog dynamically into browser cache
async function expandCatalogViaJikan() {
  const cached = localStorage.getItem("weebdle_catalog");
  if (cached) {
    animeDatabase = JSON.parse(cached);
    targetAnime = getDailyAnime();
    return;
  }

  try {
    // Fetch top anime pages (each page has 25 entries; 20 pages = 500 anime)
    let fetched = [];
    for (let page = 1; page <= 4; page++) { // initial boost
      const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&filter=bypopularity`);
      const data = await res.json();
      if (data.data) {
        const filtered = data.data
          .filter(a => a.year >= 2010 || (a.aired?.prop?.from?.year >= 2010))
          .map(a => ({
            id: a.mal_id,
            title: a.title_english || a.title,
            year: a.year || a.aired?.prop?.from?.year || 2020,
            rank: a.rank || 9999,
            genres: a.genres.map(g => g.name),
            image: a.images.jpg.image_url
          }));
        fetched = [...fetched, ...filtered];
      }
      await new Promise(r => setTimeout(r, 600)); // Respect Jikan rate limit
    }
    if (fetched.length > 0) {
      animeDatabase = fetched;
      localStorage.setItem("weebdle_catalog", JSON.stringify(fetched));
    }
  } catch (err) {
    console.warn("API fallback to seed data:", err);
  }
  targetAnime = getDailyAnime();
}

// Live Search Input handler
const searchInput = document.getElementById("anime-input");
const autocompleteList = document.getElementById("autocomplete-list");
let debounceTimer;

searchInput.addEventListener("input", (e) => {
  clearTimeout(debounceTimer);
  const query = e.target.value.trim().toLowerCase();
  
  if (query.length < 2) {
    autocompleteList.classList.add("hidden");
    return;
  }

  debounceTimer = setTimeout(() => {
    const matches = animeDatabase
      .filter(a => a.title.toLowerCase().includes(query))
      .slice(0, 6);

    renderAutocomplete(matches);
  }, 150);
});

function renderAutocomplete(list) {
  autocompleteList.innerHTML = "";
  if (list.length === 0) {
    autocompleteList.classList.add("hidden");
    return;
  }

  list.forEach(anime => {
    const li = document.createElement("li");
    li.className = "autocomplete-item";
    li.innerHTML = `
      <img class="autocomplete-thumb" src="${anime.image}" alt="${anime.title}"/>
      <div class="autocomplete-details">
        <span class="autocomplete-name">${anime.title}</span>
        <span class="autocomplete-meta">${anime.year} • Rank #${anime.rank}</span>
      </div>
    `;
    li.addEventListener("click", () => {
      submitGuess(anime);
      searchInput.value = "";
      autocompleteList.classList.add("hidden");
    });
    autocompleteList.appendChild(li);
  });
  autocompleteList.classList.remove("hidden");
}

function submitGuess(guessed) {
  if (guesses.some(g => g.id === guessed.id)) return;
  guesses.push(guessed);

  const container = document.getElementById("guesses-container");
  const row = document.createElement("div");
  row.className = "guess-row";

  // Comparison Logic
  const yearDiff = guessed.year === targetAnime.year ? "correct" : "";
  const yearArrow = guessed.year < targetAnime.year ? "↑" : (guessed.year > targetAnime.year ? "↓" : "");

  // In MAL, lower number = better rank
  const rankMatch = guessed.rank === targetAnime.rank;
  const rankDiffClass = rankMatch ? "correct" : "";
  const rankArrow = guessed.rank > targetAnime.rank ? "↑" : (guessed.rank < targetAnime.rank ? "↓" : "");

  // Genre overlap
  const sharedGenres = guessed.genres.filter(g => targetAnime.genres.includes(g));
  let genreClass = "incorrect";
  if (sharedGenres.length === targetAnime.genres.length && guessed.genres.length === targetAnime.genres.length) {
    genreClass = "correct";
  } else if (sharedGenres.length > 0) {
    genreClass = "partial";
  }

  const isTitleMatch = guessed.id === targetAnime.id;

  row.innerHTML = `
    <div class="cell cell-poster"><img src="${guessed.image}" alt="${guessed.title}" /></div>
    <div class="cell cell-title ${isTitleMatch ? 'correct' : ''}">${guessed.title}</div>
    <div class="cell ${yearDiff}">${guessed.year} <span class="arrow">${yearArrow}</span></div>
    <div class="cell ${rankDiffClass}">#${guessed.rank} <span class="arrow">${rankArrow}</span></div>
    <div class="cell ${genreClass}">${guessed.genres.slice(0, 2).join(", ")}</div>
  `;

  container.appendChild(row);

  if (isTitleMatch) {
    endGame(true);
  } else if (guesses.length >= MAX_GUESSES) {
    endGame(false);
  }
}

function endGame(won) {
  searchInput.disabled = true;
  const modal = document.getElementById("game-modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const wrap = document.getElementById("modal-poster-wrap");

  title.innerText = won ? "Splendid!" : "Game Over";
  desc.innerText = won 
    ? `You guessed ${targetAnime.title} in ${guesses.length}/${MAX_GUESSES} tries!`
    : `The secret anime was: ${targetAnime.title}`;

  wrap.innerHTML = `<img src="${targetAnime.image}" style="width:140px; border-radius:4px; margin: 12px 0;" />`;
  modal.classList.remove("hidden");
}

document.getElementById("close-modal").onclick = () => {
  document.getElementById("game-modal").classList.add("hidden");
};

// Share Button
document.getElementById("share-btn").onclick = () => {
  let shareText = `WEEBDLE - ${guesses.length}/${MAX_GUESSES}\n`;
  guesses.forEach(g => {
    const match = g.id === targetAnime.id;
    shareText += match ? "🟩🟩🟩🟩\n" : "⬛🟨⬛⬛\n";
  });
  navigator.clipboard.writeText(shareText);
  alert("Score copied to clipboard!");
};

// Initialize
expandCatalogViaJikan();
