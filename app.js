const WORD_LENGTH = 5;
const MAX_GUESSES = 6;
let currentRow = 0;
let currentCol = 0;
let gameOver = false;
let targetAnime = null;
let targetWord = "";

// Fallback pool in case external API is rate-limited initially
const fallbackPool = [
  { title: "HAIKY", name: "Haikyuu!!", rank: 110, year: 2014, genres: ["Sports"], poster: "https://cdn.myanimelist.net/images/anime/7/76014.jpg" },
  { title: "BEAST", name: "Beastars", rank: 450, year: 2019, genres: ["Drama", "Slice of Life"], poster: "https://cdn.myanimelist.net/images/anime/1245/109156.jpg" },
  { title: "TORAD", name: "Toradora!", rank: 312, year: 2008, genres: ["Romance", "Comedy"], poster: "https://cdn.myanimelist.net/images/anime/13/22128.jpg" },
  { title: "BLEAC", name: "Bleach", rank: 50, year: 2012, genres: ["Action"], poster: "https://cdn.myanimelist.net/images/anime/3/40451.jpg" }
];

// 1. Fetch MAL 500 dataset into localStorage via Jikan v4
async function loadAnimePool() {
  let pool = JSON.parse(localStorage.getItem("weebdle_pool") || "[]");
  if (pool.length < 50) {
    try {
      pool = [];
      for (let p = 1; p <= 4; p++) { // Fetching 4 pages (100 top entries) initially to avoid MAL 429 errors
        const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${p}&filter=bypopularity`);
        const data = await res.json();
        data.data.forEach(a => {
          const cleanTitle = a.title.replace(/[^A-Za-z]/g, '').toUpperCase().slice(0, 5);
          if (cleanTitle.length === 5) {
            pool.push({
              title: cleanTitle,
              name: a.title,
              rank: a.rank || "N/A",
              year: a.aired?.prop?.from?.year || 2020,
              genres: a.genres.map(g => g.name),
              poster: a.images?.jpg?.image_url
            });
          }
        });
      }
      localStorage.setItem("weebdle_pool", JSON.stringify(pool));
    } catch (e) {
      pool = fallbackPool;
    }
  }
  return pool.length > 0 ? pool : fallbackPool;
}

// 2. Initialize Board
function initBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  for (let r = 0; r < MAX_GUESSES; r++) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = `row-${r}`;
    for (let c = 0; c < WORD_LENGTH; c++) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.id = `tile-${r}-${c}`;
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

// 3. Setup Virtual Keyboard
function initKeyboard() {
  const kb = document.getElementById("keyboard");
  const layout = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["ENTER","Z","X","C","V","B","N","M","⌫"]
  ];
  kb.innerHTML = "";
  layout.forEach(row => {
    const rDiv = document.createElement("div");
    rDiv.className = "kb-row";
    row.forEach(k => {
      const btn = document.createElement("button");
      btn.textContent = k;
      btn.className = `key ${k.length > 1 ? "wide" : ""}`;
      btn.setAttribute("data-key", k);
      btn.onclick = () => handleInput(k);
      rDiv.appendChild(btn);
    });
    kb.appendChild(rDiv);
  });
}

function handleInput(key) {
  if (gameOver) return;
  if (key === "⌫" || key === "BACKSPACE") {
    if (currentCol > 0) {
      currentCol--;
      document.getElementById(`tile-${currentRow}-${currentCol}`).textContent = "";
    }
  } else if (key === "ENTER") {
    if (currentCol === WORD_LENGTH) submitGuess();
  } else if (/^[A-Z]$/.test(key) && currentCol < WORD_LENGTH) {
    document.getElementById(`tile-${currentRow}-${currentCol}`).textContent = key;
    currentCol++;
  }
}

function submitGuess() {
  let guess = "";
  for (let i = 0; i < WORD_LENGTH; i++) {
    guess += document.getElementById(`tile-${currentRow}-${i}`).textContent;
  }

  const targetArr = targetWord.split("");
  const guessArr = guess.split("");

  // Letter matching pass
  for (let i = 0; i < WORD_LENGTH; i++) {
    const tile = document.getElementById(`tile-${currentRow}-${i}`);
    const keyBtn = document.querySelector(`.key[data-key="${guessArr[i]}"]`);
    if (guessArr[i] === targetArr[i]) {
      tile.setAttribute("data-state", "correct");
      if (keyBtn) keyBtn.setAttribute("data-state", "correct");
      targetArr[i] = null;
    } else if (targetArr.includes(guessArr[i])) {
      tile.setAttribute("data-state", "present");
      if (keyBtn && keyBtn.getAttribute("data-state") !== "correct") {
        keyBtn.setAttribute("data-state", "present");
      }
    } else {
      tile.setAttribute("data-state", "absent");
      if (keyBtn && !keyBtn.hasAttribute("data-state")) {
        keyBtn.setAttribute("data-state", "absent");
      }
    }
  }

  if (guess === targetWord || currentRow === MAX_GUESSES - 1) {
    gameOver = true;
    document.getElementById("anime-poster").classList.add("revealed");
    setTimeout(() => alert(guess === targetWord ? "You Won!" : `Game Over! Word: ${targetWord} (${targetAnime.name})`), 400);
  }

  currentRow++;
  currentCol = 0;
}

window.addEventListener("keydown", (e) => handleInput(e.key.toUpperCase()));

async function start() {
  initBoard();
  initKeyboard();
  const pool = await loadAnimePool();
  targetAnime = pool[Math.floor(Math.random() * pool.length)];
  targetWord = targetAnime.title;

  document.getElementById("anime-poster").src = targetAnime.poster;
  document.getElementById("meta-year").textContent = targetAnime.year;
  document.getElementById("meta-rank").textContent = `#${targetAnime.rank}`;
  document.getElementById("meta-genres").textContent = targetAnime.genres.join(", ");
}

start();
