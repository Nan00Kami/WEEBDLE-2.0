// Link data from animeData.js with fallback
let animeDatabase = (typeof MASTER_ANIME_DATA !== "undefined") ? MASTER_ANIME_DATA : [];
let targetAnime = null;
let guesses = [];
const MAX_GUESSES = 6;

// Deterministic daily selector matching Wordle
function getDailyAnime() {
  const epoch = new Date(2024, 0, 1).getTime();
  const today = new Date().setHours(0, 0, 0, 0);
  const dayIndex = Math.floor((today - epoch) / (1000 * 60 * 60 * 24));
  return animeDatabase[dayIndex % animeDatabase.length];
}

targetAnime = getDailyAnime();

// DOM elements
const searchInput = document.getElementById("anime-input");
const autocompleteList = document.getElementById("autocomplete-list");
let debounceTimer;

// Image fallback handler to prevent blank squares
function handleImgError(imageEl) {
  imageEl.onerror = null;
  // High quality SVG placeholder showing Anime reel
  imageEl.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2280%22%20viewBox%3D%220%200%2060%2080%22%3E%3Crect%20fill%3D%22%23272729%22%20width%3D%2260%22%20height%3D%2280%22%2F%3E%3Ctext%20fill%3D%22%23818384%22%20font-family%3D%22sans-serif%22%20font-size%3D%2210%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3ENO%20COVER%3C%2Ftext%3E%3C%2Fsvg%3E";
}

// Live Search with Keyboard & Click Support
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

function submitGuess(guessed) {
  if (guesses.some(g => g.id === guessed.id)) return;
  guesses.push(guessed);

  const container = document.getElementById("guesses-container");
  const row = document.createElement("div");
  row.className = "guess-row";

  // Comparison mechanics
  const isYearMatch = guessed.year === targetAnime.year;
  const yearArrow = guessed.year < targetAnime.year ? "↑" : (guessed.year > targetAnime.year ? "↓" : "");

  // Lower numerical MAL rank = higher position
  const isRankMatch = guessed.rank === targetAnime.rank;
  const rankArrow = guessed.rank > targetAnime.rank ? "↑" : (guessed.rank < targetAnime.rank ? "↓" : "");

  // Genre overlap
  const shared = guessed.genres.filter(g => targetAnime.genres.includes(g));
  let genreClass = "incorrect";
  if (shared.length === targetAnime.genres.length && guessed.genres.length === targetAnime.genres.length) {
    genreClass = "correct";
  } else if (shared.length > 0) {
    genreClass = "partial";
  }

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
    ? `You deduced ${targetAnime.title} in ${guesses.length}/${MAX_GUESSES} tries!`
    : `The secret anime was: ${targetAnime.title}`;

  wrap.innerHTML = `<img src="${targetAnime.image}" onerror="handleImgError(this)" style="width:140px; border-radius:4px; margin: 12px 0;" />`;
  modal.classList.remove("hidden");
}

document.getElementById("close-modal").onclick = () => {
  document.getElementById("game-modal").classList.add("hidden");
};

// Share Button logic
document.getElementById("share-btn").onclick = () => {
  let shareText = `WEEBDLE - ${guesses.length}/${MAX_GUESSES}\n`;
  guesses.forEach(g => {
    const isMatch = g.id === targetAnime.id;
    shareText += isMatch ? "🟩🟩🟩🟩\n" : "⬛🟨⬛⬛\n";
  });
  navigator.clipboard.writeText(shareText);
  alert("Score copied to clipboard!");
};
