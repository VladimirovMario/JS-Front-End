import { Fragment, useEffect, useState } from "react";
import { CharacterListItem } from "./CharacterListItem";

const baseUrl = "https://swapi.dev/api/people";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <h1>The Star Wars Characters</h1>
      <ul>
        {characters.map((ch) => (
          <CharacterListItem key={ch.name} {...ch} />
        ))}
      </ul>
    </Fragment>
  );
};
