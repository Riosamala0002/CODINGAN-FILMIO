// script.js
// Get elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');
const genresSection = document.getElementById('genres');
const films = [];

// Load film data from JSON file
fetch('films.json')
  .then(response => response.json())
  .then(data => {
    films = data;
    renderGenres();
  });

// Render genres section
function renderGenres() {
  const genres = [...new Set(films.map(film => film.genre))];
  genres.forEach(genre => {
    const genreElement = document.createElement('li');
    genreElement.innerHTML = `
      <a href="#${genre}">${genre}</a>
      <ul>
        ${films.filter(film => film.genre === genre).map(film => `
          <li>
            <img src="images/${film.poster}" alt="${film.title}">
            <h3>${film.title}</h3>
            <p>${film.description}</p>
            <button>Play</button>
          </li>
        `).join('')}
      </ul>
    `;
    genresSection.appendChild(genreElement);
  });
}

// Search functionality
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  const results = films.filter(film => film.title.toLowerCase().includes(searchTerm.toLowerCase()));
  searchResults.innerHTML = '';
  results.forEach(film => {
    const resultElement = document.createElement('li');
    resultElement.innerHTML = `
      <img src="images/${film.poster}" alt="${film.title}">
      <h3>${film.title}</h3>
      <p>${film.description}</p>
      <button>Play</button>
    `;
    searchResults.appendChild(resultElement);
  });
});

window.onload = function () {
  google.accounts.id.initialize({
      client_id: 'YOUR_GOOGLE_CLIENT_ID',
      callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
      document.querySelector('.g_id_signin'),
      { theme: 'outline', size: 'large' }
  );
};

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);
  alert(`Hello, ${data.name}!`);
}

function showGenre(genre) {
  const genresList = document.querySelectorAll('.genre');
  genresList.forEach(genreItem => {
      if (genreItem.dataset.genre === genre) {
          genreItem.style.display = 'block';
      } else {
          genreItem.style.display = 'none';
      }
  });
}

function searchFilm() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const searchResults = document.getElementById('search-results');
  const allFilms = document.querySelectorAll('.film-list li');
  
  searchResults.innerHTML = ''; // Clear previous results
  
  allFilms.forEach(film => {
      const filmTitle = film.querySelector('h3').innerText.toLowerCase();
      if (filmTitle.includes(searchInput)) {
          const filmClone = film.cloneNode(true);
          searchResults.appendChild(filmClone);
      }
  });

  if (searchResults.innerHTML === '') {
      searchResults.innerHTML = '<p>No films found.</p>';
  }
}
