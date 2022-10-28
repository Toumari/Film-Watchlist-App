class Movie {
  constructor(title, runTime, genre, plot, rating, poster) {
    this.Title = title;
    this.RunTime = runTime;
    this.Genre = genre;
    this.Plot = plot;
    this.Rating = rating;
    this.Poster = poster;
  }

  render() {
    return `
        <div class="movie">
        <img
          src="${this.Poster}"
          alt=""
        />
        <div class="movie-details">
          <div class="movie-detail-title">
            <h2>${this.Title}</h2>
            <i class="fa-solid fa-star fa-xl"></i>
            <p class="movie-rating">${this.Rating}</p>
          </div>
  
          <div class="movie-text">
            <p>${this.RunTime}</p>
            <p>${this.Genre}</p>
            
            <a id="watchButton" href="#"
                ><i id="add-to-watchlist" data-movieTitle=${this.Title}  class="fa-solid fa-circle-plus fa-xl"></i
                ><span class="watchlist-text">Watchlist</span></a
            >
            </div>
            <p class="movie-description">
            ${this.Plot}
            </p>
        </div>
        </div>
            `;
  }

  render_watchlist() {
    return `
        <div class="movie">
        <img
          src="${this.Poster}"
          alt=""
        />
        <div class="movie-details">
          <div class="movie-detail-title">
            <h2>${this.Title}</h2>
            <i class="fa-solid fa-star fa-xl"></i>
            <p class="movie-rating">${this.Rating}</p>
          </div>
  
          <div class="movie-text">
            <p>${this.RunTime}</p>
            <p>${this.Genre}</p>
            <a href="#"
                ><i id="remove-from-watchlist" data-movieTitle=${this.Title} class="fa-solid fa-circle-minus fa-xl"></i
                ><span class="watchlist-text">Remove</span></a
            >
            </div>
            <p class="movie-description">
            ${this.Plot}
            </p>
        </div>
        </div>
            `;
  }
}

export default Movie;
