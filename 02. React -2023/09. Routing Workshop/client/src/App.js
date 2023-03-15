import { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import * as gameService from "./services/gameService";

import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getAll().then((data) => {
      setGames(data);
      // console.log('From app.js data', data);
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    // Post data in server
    const newGame = await gameService.create(data);
    // Update local state
    setGames(state => [...state, newGame]);
    // Redirect
    navigate("/catalog");
  };

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create-game"
            element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />}
          />
          <Route path="/catalog" element={<Catalog games={games} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
