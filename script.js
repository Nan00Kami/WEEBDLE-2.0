let animeDatabase = [];
let targetAnime = null;
let gameOver = false;

// Robust CSV Line Parser (handles quotes and commas inside cells)
function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length < 2) return [];

  const headers = splitCSVRow(lines[0]).map(h => h.trim().toLowerCase());
  const records = [];

  for (let i = 1; i < lines.length; i++) {
    const row = splitCSVRow(lines[i]);
    if (row.length !== headers.length) continue;

    const record = {};
    headers.forEach((h, idx) => {
      record[h] = row[idx] ? row[idx].trim() : '';
    });
    records.push(record);
  }
  return records;
}

function splitCSVRow(rowText) {
  const result = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < rowText.length; i++) {
    const char = rowText[i];
    if (char === '"') {
      if (inQuotes && rowText[i + 1] === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(cell);
      cell = '';
    } else {
      cell += char;
    }
  }
  result.push(cell);
  return result;
}

// Load CSV and set up mystery anime
async function initGame() {
  const statusMsg = document.getElementById('status-msg');
  statusMsg.textContent = 'Loading anime dataset...';

  try {
    const response = await fetch('anime_dataset.csv');
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const text = await response.text();
    const rows = parseCSV(text);

    animeDatabase = rows.map(row => {
      const title = row['title'] || row['name'] || row['anime'] || '';
      const type = row['type'] || 'TV';
      const year = parseInt(row['year'] || row['release year'] || row['aired'] || row['premiered'], 10) || 0;
      const episodes = parseInt(row['episodes'] || row['eps'], 10) || 0;
      const genresRaw = row['genres'] || row['genre'] || '';
      const genres = genresRaw ? genresRaw.replace(/[\[\]']/g, '').split(',').map(g => g.trim()) : [];
      const score = parseFloat(row['score'] || row['rating']) || 0.0;

      return { title, type, year, episodes, genres, score };
    }).filter(a => a.title);

    // Populate Datalist
    const datalist = document.getElementById('anime-options');
    datalist.innerHTML = animeDatabase.map(a => `<option value="${a.title}">`).join('');

    // Select Target Anime
    targetAnime = animeDatabase[Math.floor(Math.random() * animeDatabase.length)];
    statusMsg.textContent = '';
  } catch (err) {
    console.error('Error loading dataset:', err);
    statusMsg.textContent = 'Failed to load dataset. Make sure you are serving via a local server (e.g. Live Server).';
  }
}

function handleGuess() {
  if (gameOver) return;

  const input = document.getElementById('anime-input');
  const query = input.value.trim();
  const guess = animeDatabase.find(a => a.title.toLowerCase() === query.toLowerCase());

  if (!guess) {
    alert('Anime not found in database. Pick a valid title from the list.');
    return;
  }

  renderGuess(guess);
  input.value = '';

  if (guess.title === targetAnime.title) {
    gameOver = true;
    const statusMsg = document.getElementById('status-msg');
    statusMsg.style.color = '#4caf50';
    statusMsg.textContent = `Correct! The mystery anime was ${targetAnime.title}!`;
  }
}

function renderGuess(guess) {
  const tbody = document.getElementById('guess-list');
  const tr = document.createElement('tr');

  // Title
  const titleTd = `<td>${guess.title}</td>`;

  // Type comparison
  const typeClass = guess.type.toLowerCase() === targetAnime.type.toLowerCase() ? 'cell-correct' : 'cell-incorrect';
  const typeTd = `<td class="${typeClass}">${guess.type}</td>`;

  // Release Year comparison
  let yearClass = 'cell-correct';
  let yearArrow = '';
  if (guess.year < targetAnime.year) {
    yearClass = 'cell-higher';
    yearArrow = ' ↑';
  } else if (guess.year > targetAnime.year) {
    yearClass = 'cell-lower';
    yearArrow = ' ↓';
  }
  const yearTd = `<td class="${yearClass}">${guess.year || 'N/A'}${yearArrow}</td>`;

  // Episodes comparison
  let epClass = 'cell-correct';
  let epArrow = '';
  if (guess.episodes < targetAnime.episodes) {
    epClass = 'cell-higher';
    epArrow = ' ↑';
  } else if (guess.episodes > targetAnime.episodes) {
    epClass = 'cell-lower';
    epArrow = ' ↓';
  }
  const epTd = `<td class="${epClass}">${guess.episodes}${epArrow}</td>`;

  // Genres comparison
  const sharedGenres = guess.genres.filter(g => targetAnime.genres.map(x => x.toLowerCase()).includes(g.toLowerCase()));
  let genreClass = 'cell-incorrect';
  if (sharedGenres.length === targetAnime.genres.length && guess.genres.length === targetAnime.genres.length) {
    genreClass = 'cell-correct';
  } else if (sharedGenres.length > 0) {
    genreClass = 'cell-partial';
  }
  const genreTd = `<td class="${genreClass}">${guess.genres.join(', ') || 'None'}</td>`;

  // Score comparison
  let scoreClass = 'cell-correct';
  let scoreArrow = '';
  if (guess.score < targetAnime.score) {
    scoreClass = 'cell-higher';
    scoreArrow = ' ↑';
  } else if (guess.score > targetAnime.score) {
    scoreClass = 'cell-lower';
    scoreArrow = ' ↓';
  }
  const scoreTd = `<td class="${scoreClass}">${guess.score.toFixed(2)}${scoreArrow}</td>`;

  tr.innerHTML = titleTd + typeTd + yearTd + epTd + genreTd + scoreTd;
  tbody.prepend(tr);
}

document.addEventListener('DOMContentLoaded', () => {
  initGame();
  document.getElementById('guess-btn').addEventListener('click', handleGuess);
  document.getElementById('anime-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleGuess();
  });
});
