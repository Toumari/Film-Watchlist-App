import Movie from "./Movie.js";
// Importing the movieArray from the index file
const movieArray = JSON.parse(localStorage.getItem("movieWatchList"));
const movieContainer = document.getElementById("movie-list"); // Checking to see if the movieArray is being imported correctly

const renderMovies = () => {
  movieContainer.innerHTML = "";
  movieArray.forEach((data) => {
    const firstMovie = new Movie(
      data.Title,
      data.RunTime,
      data.Genre,
      data.Plot,
      data.Rating,
      data.Poster
    );
    movieContainer.innerHTML += firstMovie.render_watchlist();
  });
};

document.addEventListener("click", (e) => {
  if (e.target.id === "remove-from-watchlist") {
    removeFromWatchlist(e);
  }
});

const removeFromWatchlist = (e) => {
  movieArray.forEach((movie, index) => {
    if (movie.Title === e.target.dataset.movietitle) {
      movieArray.splice(index, 1);
    }
  });
  localStorage.setItem("movieWatchList", JSON.stringify(movieArray));
  renderMovies();
};

renderMovies();
