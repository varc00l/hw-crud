import * as dataMovies from "./db.json" assert { type: "json" };
const moviesApi = `https://api.themoviedb.org/3/movie/popular?api_key=4521bf4c5fe855be15cd691391edfa02`
const moviesData = dataMovies.default.movies;

function getMoviesFromDatabase() {
  const moviesData = dataMovies.default.movies;
  console.log(moviesData)

  fetch(moviesApi, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((movie) => console.log(movie))
    .catch((error) => console.log(error));
}
getMoviesFromDatabase();

function addNewMovie() {

  fetch(moviesApi,  {
    method: "POST",
    body: JSON.stringify(moviesData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
  .then(response => response.json())
  .then(movie => console.log(movie))
  .catch(error => console.log(error));
}
addNewMovie()