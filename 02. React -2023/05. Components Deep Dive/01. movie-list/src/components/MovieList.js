import Movie from "./Movie";

export default function MovieList({
     movies,
     onMovieDelete,
     onMovieSelect,
     }) {
  //   let movieList = movies.map((movie) => (<li><Movie {...movie} /></li>));

  return (
    <ul>
      {movies.map((movie) => (
        /*https://reactjs.org/docs/lists-and-keys.html#keys*/
        <li key={movie.id}>
          <Movie
          {...movie} 
          onMovieDelete={onMovieDelete}
          onMovieSelect={onMovieSelect} />
        </li>
      ))}
    </ul>
  );
}
