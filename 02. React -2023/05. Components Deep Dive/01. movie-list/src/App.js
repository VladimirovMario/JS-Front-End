import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
// import { movies as movieData } from "../src/films";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/films.json")
      .then((response) => response.json())
      .then((movieData) => {
        setMovies(movieData);
        console.log(movieData);
      })
      .catch((myErr) => console.error(myErr));
  }, []);

  const onMovieDelete = (id) => {
    setMovies((state) => state.filter((m) => m.id !== id));
  };

  const onMovieSelect = (id) => {
    setMovies((state) => state.map((m) => ({ ...m, selected: m.id === id })));
  };

  return (
    <div>
      <h1>Components deep dive</h1>
      {/* <MovieList movies={movies.splice(0, 5)} /> */}

      <MovieList
        movies={movies}
        onMovieDelete={onMovieDelete}
        onMovieSelect={onMovieSelect}
      />
    </div>
  );
}

export default App;
