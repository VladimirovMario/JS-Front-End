import { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import * as gameService from "./services/gameService";
import * as authService from "./services/authService";

import { AuthContext } from "./contexts/AuthContext";

import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from "./components/GameDetails/GameDetails";

function App() {
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});

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
    setGames((state) => [newGame, ...state]);
    // Redirect
    navigate("/catalog");
  };

  const onLoginSubmit = async (data) => {
    console.log("onLoginSubmit", data);
    const result = await authService.login(data);
    console.log(result);
    // { email: "peter@abv.bg", _id: ..., accessToken: ... }
  };

  const contextValue = {
    onLoginSubmit,
  };

  return (
    <AuthContext.Provider value={contextValue}>
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
            <Route path="/catalog/:gameId" element={<GameDetails />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
