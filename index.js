import Movie from "./Movie.js";

const movieContainer = document.getElementById("movie-list");
const movieArray = [];
const searchBar = document.getElementById("movie-search");
const searchBtn = document.getElementById("search-btn");
const watchList = document.getElementById("add-to-watchlist");
let movieWatchList = localStorage.getItem("movieWatchList")
  ? JSON.parse(localStorage.getItem("movieWatchList"))
  : localStorage.setItem("movieWatchList", JSON.stringify([]));

console.log(localStorage.getItem("movieWatchList"));

const renderMovies = () => {
  movieContainer.innerHTML = "";
  fetch(`http://www.omdbapi.com/?apikey=YOURKEY=${searchBar.value}`)
    .then((res) => res.json())
    .then((data) => {
      const firstMovie = new Movie(
        data.Title,
        data.Runtime,
        data.Genre,
        data.Plot,
        data.imdbRating,
        data.Poster
      );
      console.log(data);
      movieArray.push(firstMovie);
      localStorage.setItem("movieArray", JSON.stringify(movieArray));
      movieContainer.innerHTML += firstMovie.render();
      return firstMovie;
    });
};

const addToWatchList = (e) => {
  e.preventDefault();
  console.log("Clicked");
  movieWatchList = JSON.parse(localStorage.getItem("movieWatchList"));
  movieArray.forEach((movie) => {
    movieWatchList.push(movie);
  });
  localStorage.setItem("movieWatchList", JSON.stringify(movieWatchList));
  console.log();
};

searchBtn.addEventListener("click", renderMovies);

document.addEventListener("click", (e) => {
  if (e.target.id === "add-to-watchlist") {
    addToWatchList(e);
  }
});

export { movieArray }; // Exporting the movieArray so that it can be used in the watchlist file
