//an empty array to store movie titles
let movies = [];

// Function to add a movie to the list
function addMovie() {
    // Get the movie title input value
    const movieTitle = document.getElementById('movieTitle').value;
    // If the input is not empty, add the movie to the array
    if (movieTitle) {
        movies.push(movieTitle);
        // Update the displayed movie list
        displayMovies();
        // Clear the input field
        document.getElementById('movieTitle').value = '';
    }
}

// Function to display the movies in the list
function displayMovies() {
    // Get the movie list element
    const movieList = document.getElementById('movieList');
    // Clear the current list display
    movieList.innerHTML = '';

    // Sort the movies array alphabetically
    movies.sort((a, b) => a.localeCompare(b));

    // Create list items for each movie and append them to the movie list element
    movies.forEach((movie, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = movie;
        movieList.appendChild(listItem);
    });
}

// Function to reset the movie list
function resetList() {
    // Clear the movies array
    movies = [];
    // Update the displayed movie list
    displayMovies();
}
