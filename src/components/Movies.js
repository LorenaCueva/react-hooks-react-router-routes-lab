import React from "react";
import { movies } from "../data";

const moviesToDisplay = movies.map(movie => (
  <div key={movie.title}>
    <h2>{movie.title}</h2>
    <p>Time: {movie.time}</p>
    <p>Genres:</p>
    <ul>
      {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
  </div>
))

  console.log(moviesToDisplay)

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToDisplay}
    </div>
  )
}

export default Movies;
