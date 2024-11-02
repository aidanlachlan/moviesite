// https://www.omdbapi.com/?apikey=d65f83fb&s=fast


// fetch('https://www.omdbapi.com/?apikey=d65f83fb&s=fast')
// .then(res => res.json())
// .then(data => console.log(data))



// async function fetchPosters() {
//     const response = await fetch('https://www.omdbapi.com/?apikey=d65f83fb&s=fast');
//     const data = await response.json();

//     const posters = data.Search.slice(0, 6); // Get first 6 posters

//     // Generate HTML string for all poster images
//     const postersHTML = posters.map(movie => 
//       `<img class="poster" src="${movie.Poster}" alt="">`
//     ).join('');

//     document.querySelector('.poster-container').innerHTML = postersHTML;
//   }

//   // Call the function to fetch posters
//   fetchPosters();


const API = 'https://www.omdbapi.com/?apikey=d65f83fb&s=';

const searchBar = document.getElementById('search-bar');
const iconWrap = document.querySelector('.icon-wrap');

// Function to fetch and display posters
async function fetchPosters(searchTerm) {
  const response = await fetch(`${API}${searchTerm}`);
  const data = await response.json();
  
  const movies = data.Search ? data.Search.slice(0, 6) : []; // Get first 6 movies

//   Convert movies to images 
  const postersHTML = movies.map(movie =>
    `<img class="poster" src="${movie.Poster}" alt="img">`
  ).join('');

  document.querySelector('.poster-container').innerHTML = postersHTML;

// Hide the loading spinner and loading bar and show the poster container
  document.querySelector('.loading-state').style.display = 'none';
  document.querySelector('.progress-bar-fill').style.display = 'none';
  document.querySelector('.poster-container').style.display = 'flex';
}

function searchMovies() {
    const searchTerm = searchBar.value.trim();  // Get the search term from the input field
    if (searchTerm) {  // Only search if there's a term
      fetchPosters(searchTerm);
    }
}


// Event listener for the search icon click
iconWrap.addEventListener('click', searchMovies);
// Event listener for Enter key press in search bar
searchBar.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    iconWrap.click(); // Trigger the search icon click
  }
});