let animeDatabase = (typeof MASTER_ANIME_DATA !== "undefined") ? MASTER_ANIME_DATA : [];
let targetAnime = null;
let guesses = [];
const MAX_GUESSES = 6;

// Deterministic Daily Selector
function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getDailyAnime() {
  const epoch = new Date(2024, 0, 1).getTime();
  const today = new Date().setHours(0, 0, 0, 0);
  const dayIndex = Math.floor((today - epoch) / (1000 * 60 * 60 * 24));
  return animeDatabase[dayIndex % animeDatabase.length];
}

targetAnime = getDailyAnime();
const todayKey = getTodayKey();

// UI Elements
const searchInput = document.getElementById("anime-input");
const autocompleteList = document.getElementById("autocomplete-list");
const guessesContainer = document.getElementById("guesses-container");

// Local Storage Career Stats Defaults
function getUserStats() {
  const defaultStats = {
    played: 0,
    points: 0,
    currentStreak: 0,
    maxStreak: 0,
    lastPlayedDate: null
  };
  return JSON.parse(localStorage.getItem("anidle_stats") || JSON.stringify(defaultStats));
}

function saveUserStats(stats) {
  localStorage.setItem("anidle_stats", JSON.stringify(stats));
}

// Restore State on Refresh
function restoreDailyState() {
  const savedState = JSON.parse(localStorage.getItem(`anidle_game_${todayKey}`) || "null");
  if (!savedState) return;

  savedState.guesses.forEach(id => {
    const anime = animeDatabase.find(a => a.id === id);
    if (anime) renderGuessRow(anime);
  });

  if (savedState.isCompleted) {
    searchInput.disabled = true;
    searchInput.placeholder = "Come back tomorrow for a new anime!";
    const won = guesses.some(g => g.id === targetAnime.id);
    endGame(won, false);
  }
}

function persistCurrentState(isCompleted, won) {
  const state = {
    guesses: guesses.map(g => g.id),
    isCompleted: isCompleted,
    won: won
  };
  localStorage.setItem(`anidle_game_${todayKey}`, JSON.stringify(state));

  if (isCompleted) {
    updateCareerStats(won);
  }
}

function updateCareerStats(won) {
  const stats = getUserStats();
  if (stats.lastPlayedDate === todayKey) return;

  stats.played += 1;
  stats.lastPlayedDate = todayKey;

  if (won) {
    const pointsAwarded = Math.max(1, 6 - guesses.length);
    stats.points += pointsAwarded;
    stats.currentStreak += 1;
    if (stats.currentStreak > stats.maxStreak) {
      stats.maxStreak = stats.currentStreak;
    }
  } else {
    stats.currentStreak = 0;
  }

  saveUserStats(stats);
}

// Guess Handling
function submitGuess(guessed) {
  if (guesses.some(g => g.id === guessed.id)) return;
  renderGuessRow(guessed);

  const isMatch = guessed.id === targetAnime.id;
  const isCompleted = isMatch || guesses.length >= MAX_GUESSES;

  persistCurrentState(isCompleted, isMatch);

  if (isCompleted) {
    endGame(isMatch, true);
  }
}

function renderGuessRow(guessed) {
  guesses.push(guessed);

  const row = document.createElement("div");
  row.className = "guess-row";

  const isYearMatch = guessed.year === targetAnime.year;
  const yearArrow = guessed.year < targetAnime.year ? "↑" : (guessed.year > targetAnime.year ? "↓" : "");

  const isRankMatch = guessed.rank === targetAnime.rank;
  const rankArrow = guessed.rank > targetAnime.rank ? "↑" : (guessed.rank < targetAnime.rank ? "↓" : "");

  const shared = guessed.genres.filter(g => targetAnime.genres.includes(g));
  let genreClass = "incorrect";
  if (shared.length === targetAnime.genres.length && guessed.genres.length === targetAnime.genres.length) {
    genreClass = "correct";
  } else if (shared.length > 0) {
    genreClass = "partial";
  }

  // Highlight each matched genre in green; unmatched genres keep default color
  const formattedGenres = guessed.genres.map(g => {
    const isGenreMatch = targetAnime.genres.includes(g);
    return isGenreMatch 
      ? `<span style="color: #79d672; font-weight: 800;">${g}</span>` 
      : `<span>${g}</span>`;
  }).join(", ");

  const isTitleMatch = guessed.id === targetAnime.id;

  row.innerHTML = `
    <div class="cell cell-poster">
      <img src="${guessed.image}" alt="${guessed.title}" onerror="handleImgError(this)" />
    </div>
    <div class="cell cell-title ${isTitleMatch ? 'correct' : ''}">${guessed.title}</div>
    <div class="cell ${isYearMatch ? 'correct' : ''}">
      ${guessed.year} ${!isYearMatch ? `<span class="arrow">${yearArrow}</span>` : ''}
    </div>
    <div class="cell ${isRankMatch ? 'correct' : ''}">
      #${guessed.rank} ${!isRankMatch ? `<span class="arrow">${rankArrow}</span>` : ''}
    </div>
    <div class="cell ${genreClass}">${formattedGenres}</div>
  `;

  guessesContainer.appendChild(row);
}

function endGame(won, showModal = true) {
  searchInput.disabled = true;
  searchInput.placeholder = "Come back tomorrow for a new anime!";
  if (!showModal) return;

  const modal = document.getElementById("game-modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const wrap = document.getElementById("modal-poster-wrap");

  title.innerText = won ? "Victory!" : "Game Over";
  desc.innerText = won 
    ? `You deduced ${targetAnime.title} in ${guesses.length}/${MAX_GUESSES} tries!`
    : `The secret anime was: ${targetAnime.title}`;

  wrap.innerHTML = `<img src="${targetAnime.image}" onerror="handleImgError(this)" style="width:140px; border-radius:4px; margin: 12px 0;" />`;
  modal.classList.remove("hidden");
}

function handleImgError(el) {
  el.onerror = null;
  el.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2280%22%3E%3Crect%20fill%3D%22%23272729%22%20width%3D%2260%22%20height%3D%2280%22%2F%3E%3Ctext%20fill%3D%22%23818384%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3ENO%20COVER%3C%2Ftext%3E%3C%2Fsvg%3E";
}

// Search Autocomplete
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
      .slice(0, 7);
    renderAutocomplete(matches);
  }, 120);
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
      <img class="autocomplete-thumb" src="${anime.image}" alt="${anime.title}" onerror="handleImgError(this)"/>
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

// Modals Setup
document.getElementById("stats-btn").onclick = () => {
  const stats = getUserStats();
  document.getElementById("stat-played").innerText = stats.played;
  document.getElementById("stat-points").innerText = stats.points;
  document.getElementById("stat-streak").innerText = stats.currentStreak;
  document.getElementById("stat-max-streak").innerText = stats.maxStreak;
  document.getElementById("stats-modal").classList.remove("hidden");
};

document.getElementById("help-btn").onclick = () => {
  document.getElementById("help-modal").classList.remove("hidden");
};

document.getElementById("close-stats-modal").onclick = () => {
  document.getElementById("stats-modal").classList.add("hidden");
};

document.getElementById("close-help-modal").onclick = () => {
  document.getElementById("help-modal").classList.add("hidden");
};

document.getElementById("close-modal").onclick = () => {
  document.getElementById("game-modal").classList.add("hidden");
};

// Share Button
document.getElementById("share-btn").onclick = () => {
  let shareText = `ANIDLE - ${guesses.length}/${MAX_GUESSES}\n`;
  guesses.forEach(g => {
    const isMatch = g.id === targetAnime.id;
    shareText += isMatch ? "🟩🟩🟩🟩\n" : "⬛🟨⬛⬛\n";
  });
  navigator.clipboard.writeText(shareText);
  alert("Score copied to clipboard!");
};

// Curated Quotes
const ANIME_QUOTES = [
  { quote: "Nah, I'd win", author: "Satoru Gojo (Jujutsu Kaisen)", image: "https://images.wallpapersden.com/image/download/jujutsu-kaisen-satoru-gojo_bGtubmuUmZqaraWkpJRmbmdlrWZlbWU.jpg" },
  { quote: "The One Piece is real!", author: "Edward \"Whitebeard\" Newgate (One Piece)", image: "https://images.alphacoders.com/790/thumb-1920-790574.png" },
  { quote: "People die if they are killed.", author: "Shirou Emiya (Fate/stay night)", image: "https://images7.alphacoders.com/752/thumb-1920-752259.png" },
  { quote: "I am atomic.", author: "Cid Kagenou / Shadow (The Eminence in Shadow)", image: "https://images5.alphacoders.com/129/thumb-1920-1294187.png" },
  { quote: "The Archer class really is made up of archers!", author: "Rin Tohsaka (Fate/stay night: Unlimited Blade Works)", image: "https://images6.alphacoders.com/902/thumb-1920-902733.png" },
  { quote: "Stand proud. You're strong.", author: "Ryomen Sukuna (Jujutsu Kaisen)", image: "https://4kwallpapers.com/images/walls/thumbs_2t/25100.jpg" },
  { quote: "Throughout Heaven and Earth, I alone am the honored one.", author: "Satoru Gojo (Jujutsu Kaisen)", image: "https://images8.alphacoders.com/125/thumb-1920-1253107.jpg" },
  { quote: "Did you really think that killing me would be enough to make me die?", author: "Anos Voldigoad (The Misfit of Demon King Academy)", image: "https://images.alphacoders.com/109/thumb-1920-1090513.jpg" },
  { quote: "Waku waku!", author: "Anya Forger (Spy × Family)", image: "https://images6.alphacoders.com/133/thumb-1920-1333611.jpeg" },
  { quote: "You thought your first kiss would be JoJo, but it was me, Dio!", author: "Dio Brando (JoJo's Bizarre Adventure: Phantom Blood)", image: "https://images5.alphacoders.com/659/thumb-1920-659516.png" },
  { quote: "Next, it's your turn.", author: "All Might / Toshinori Yagi (My Hero Academia)", image: "https://images2.alphacoders.com/737/thumb-1920-737139.png" },
  { quote: "Everything is not daijobu.", author: "Ken Kaneki (Tokyo Ghoul)", image: "https://images7.alphacoders.com/596/thumb-1920-596590.jpg" }
];

function renderRandomQuote() {
  const chosen = ANIME_QUOTES[Math.floor(Math.random() * ANIME_QUOTES.length)];
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteImg = document.getElementById("quote-img");
  if (quoteText && quoteAuthor && quoteImg) {
    quoteText.textContent = `“${chosen.quote}”`;
    quoteAuthor.textContent = `— ${chosen.author}`;
    quoteImg.src = chosen.image;
  }
}

// Initial Boot
renderRandomQuote();
restoreDailyState();
