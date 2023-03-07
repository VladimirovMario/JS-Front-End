import { useEffect } from "react";
import styles from "./Movie.module.css";

export default function Movie({
  id,
  Actors,
  Director,
  Genre,
  Images,
  Plot,
  Poster,
  Released,
  Title,
  onMovieDelete,
  onMovieSelect,
  selected,
}) {
  // useEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined): void
  useEffect(() => {
    console.log(`>>>>> componentDidMount ${Title}`);

    return () => {
      console.log(`>>>>> componentWillUnmount ${Title} >>>`);
    };
  }, [Title]);

  useEffect(() => {
    console.log(`<<< componentDidUpdate ${Title}`);
  }, [selected, Title]);

  // useEffect(() => {
  //   return () => {
  //     console.log(`>>>>> componentWillUnmount ${Title} >>>`);
  //   };
  // }, [Title]);

  return (
      <article className={`${styles["movie-article"]} second-class third-class`}>
      <h3>
        {Title}, {Released}
      </h3>
      {selected && <h4>SELECTED</h4>}
      <p>ID: {id}</p>
      <p>Actors: {Actors}</p>
      <p>{Director}</p>
      <p>{Genre}</p>
      <p className={styles.color}>{Plot}</p>
      <img src={Poster} alt={`${Title}.jpg`} />
      {/* <img src={Images[2]} alt="" /> */}
      <footer>
        <button onClick={() => onMovieDelete(id)}>Delete</button>
        <button onClick={() => onMovieSelect(id)}>Select</button>
      </footer>
    </article>
  );
}

/**​​
   id,
  Actors,
  Awards,
  Country,
  Director,
  Genre,
  Images,
  Language,
  Metascore,
  Plot,
  Poster,
  Rated,
  Released,
  Response,
  Runtime,
  Title,
  Type,
  Writer,
  Year,
  imdbID,
  imdbRating,
  imdbVotes,
  onMovieDelete
Images: Array(5) ​​
Response: "True"​​
*/
