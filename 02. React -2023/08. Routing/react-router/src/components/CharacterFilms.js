import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const baseUrl = "https://swapi.dev/api/";

export const CharacterFilms = () => {
  const { characterId } = useParams();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/films`)
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.results);
      });
  }, [characterId]);

  // https://swapi.dev/api/vehicles/14/
  // https://swapi.dev/api/films/1/

  return (
    <Fragment>
      <h2>Films</h2>

      <ul>
        {films.map((f) => {
          const id = f.url.split("/")[5];

          return (
            <li key={id}>
              <Link to={`/films/${id}`}>{f.title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
