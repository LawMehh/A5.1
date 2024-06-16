let movies = [];

function addMovie() {
    const movieTitle = document.getElementById('movieTitle').value;
    if (movieTitle) {
        movies.push(movieTitle);
        displayMovies();
        document.getElementById('movieTitle').value = '';
    }
}

function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.forEach((movie, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = movie;
        movieList.appendChild(listItem);
    });
}

function resetList() {
    movies = [];
    displayMovies();
}
