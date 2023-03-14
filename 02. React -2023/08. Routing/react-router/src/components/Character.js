import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate, Link, Routes, Route } from "react-router-dom";


import { CharacterFilms } from "./CharacterFilms";
import { Navigation } from "./Navigation";
const baseUrl = "https://swapi.dev/api/people";

export const Character = () => {
  const { characterId } = useParams();

  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${baseUrl}/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacter(data);
      });
  }, [characterId]);

  const onBackButtonClick = () => {
    navigate("/characters");
    // navigate(-1);
  };

  return (
    <Fragment>

      <div>
        <h1>Character page</h1>
        <h2>{character.name}</h2>
        <p>gender: {character.gender}</p>
        <p>height: {character.height}</p>
        <p>{character.url}</p>
        <button onClick={onBackButtonClick}>Back</button>
      </div>

      {/* Nested routes */}
      <Navigation>
        <li><Link to="films">Films</Link></li>
        <li><Link to="vehicles">Vehicles</Link></li>
        <li><Link to="starships">Star ships</Link></li>
      </Navigation>

      <Routes>
        <Route path="/films" element={<CharacterFilms />}/>
        <Route path="/vehicles" element={<h5>Vehicles</h5>}/>
        <Route path="/starships" element={<h5>Starships</h5>}/>
      </Routes>

    </Fragment>
  );
};
