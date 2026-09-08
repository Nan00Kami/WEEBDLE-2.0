const GRAPHQL_ENDPOINT = 'https://graphql.anilist.co';
const MAX_GUESSES = 6;
let animeCatalog = [];
let targetAnime = null;
let currentGuesses = 0;

const statusEl = document.getElementById('status');
const inputEl = document.getElementById('guess-input');
const dropdownEl = document.getElementById('dropdown');
const guessesBody = document.getElementById('guesses-body');
const modal = document.getElementById('game-over-modal');

// GraphQL query targeting top anime released between 2010 and 2026
const query = `
query ($page: Int) {
  Page(page: $page, perPage: 50) {
    media(type: ANIME, sort: POPULARITY_DESC, startDate_greater: 20100000, startDate_lesser: 20261231, format_in: [TV, MOVIE]) {
      id
      title { english romaji }
      coverImage { medium }
      startDate { year }
      averageScore
      genres
    }
  }
}
`;

async function fetchAnimePool() {
  const cached = localStorage.getItem('weebdle_catalog_v1');
  if (cached) {
    animeCatalog = JSON.parse(cached);
    initGame();
    return;
  }

  statusEl.innerText = "Downloading Top 500 popular anime (2010–2026)...";
  
  try {
    // Fetch 10 pages x 50 items = 500 items
    for (let page = 1; page <= 10; page++) {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ query, variables: { page } })
      });
      const resData = await response.json();
      const pageList = resData.data.Page.media.map(item => ({
        id: item.id,
        title: item.title.english || item.title.romaji,
        poster: item.coverImage.medium,
        year: item.startDate.year || 2020,
        score: item.averageScore || 70,
        genres: item.genres || []
      }));
      animeCatalog.push(...pageList);
    }
    localStorage.setItem('weebdle_catalog_v1', JSON.stringify(animeCatalog));
    initGame();
  } catch (err) {
    statusEl.innerText = "Failed to load API data. Check network connection.";
  }
}

function initGame() {
  statusEl.innerText = `Guess today's anime (${animeCatalog.length} available). You have 6 attempts.`;
  inputEl.disabled = false;
  
  // Pick random anime for this round
  targetAnime = animeCatalog[Math.floor(Math.random() * animeCatalog.length)];
}

// Search Dropdown Listener
inputEl.addEventListener('input', () => {
  const query = inputEl.value.trim().toLowerCase();
  dropdownEl.innerHTML = '';
  if (!query) { dropdownEl.style.display = 'none'; return; }

  const matches = animeCatalog
    .filter(a => a.title.toLowerCase().includes(query))
    .slice(0, 6);

  if (matches.length === 0) { dropdownEl.style.display = 'none'; return; }

  matches.forEach(item => {
    const div = document.createElement('div');
    div.innerText = item.title;
    div.onclick = () => selectGuess(item);
    dropdownEl.appendChild(div);
  });
  dropdownEl.style.display = 'block';
});

function selectGuess(guess) {
  dropdownEl.style.display = 'none';
  inputEl.value = '';
  currentGuesses++;
  renderGuessRow(guess);

  if (guess.id === targetAnime.id) {
    endGame(true);
  } else if (currentGuesses >= MAX_GUESSES) {
    endGame(false);
  }
}

function renderGuessRow(guess) {
  const tr = document.createElement('tr');

  // 1. Poster
  const tdPoster = document.createElement('td');
  tdPoster.className = 'poster-cell';
  tdPoster.innerHTML = `<img src="${guess.poster}" alt="Poster" />`;

  // 2. Title
  const tdTitle = document.createElement('td');
  tdTitle.innerText = guess.title;
  tdTitle.className = (guess.id === targetAnime.id) ? 'correct' : 'wrong';

  // 3. Year Comparison
  const tdYear = document.createElement('td');
  let yearArrow = '';
  if (guess.year < targetAnime.year) yearArrow = ' ⬆';
  if (guess.year > targetAnime.year) yearArrow = ' ⬇';
  tdYear.innerText = `${guess.year}${yearArrow}`;
  tdYear.className = (guess.year === targetAnime.year) ? 'correct' : 'wrong';

  // 4. Score Comparison
  const tdScore = document.createElement('td');
  let scoreArrow = '';
  if (guess.score < targetAnime.score) scoreArrow = ' ⬆';
  if (guess.score > targetAnime.score) scoreArrow = ' ⬇';
  tdScore.innerText = `${guess.score}\%${scoreArrow}`;
  tdScore.className = (guess.score === targetAnime.score) ? 'correct' : 'wrong';

  // 5. Genres Comparison
  const tdGenre = document.createElement('td');
  const sharedGenres = guess.genres.filter(g => targetAnime.genres.includes(g));
  tdGenre.innerText = guess.genres.slice(0, 3).join(', ');
  if (sharedGenres.length === targetAnime.genres.length && guess.genres.length === targetAnime.genres.length) {
    tdGenre.className = 'correct';
  } else if (sharedGenres.length > 0) {
    tdGenre.className = 'partial';
  } else {
    tdGenre.className = 'wrong';
  }

  tr.append(tdPoster, tdTitle, tdYear, tdScore, tdGenre);
  guessesBody.appendChild(tr);
}

function endGame(won) {
  inputEl.disabled = true;
  modal.style.display = 'flex';
  document.getElementById('modal-title').innerText = won ? "VICTORY" : "GAME OVER";
  document.getElementById('modal-desc').innerText = won
    ? `You deduced it in ${currentGuesses} guesses!`
    : `The correct anime was: ${targetAnime.title}`;
}

fetchAnimePool();
