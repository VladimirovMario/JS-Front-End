import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  gameServiceFactory,
  getAllGames,
  getLatestsGames,
} from "../services/gameService";

import { useAuthContext } from "./AuthContext";

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const gameService = gameServiceFactory(token);
  const limit = 3;

  useEffect(() => {
    Promise.all([getAllGames(), getLatestsGames(limit)])
      .then(([gamesData, latestGamesData]) => {
        setGames(gamesData);
        setLatestGames(latestGamesData);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  // TODO extract the handlers
  const onCreateSubmit = async (data) => {
    let { title, genre, price, imageUrl, description } = data;
    price = Number(price);
    try {
      const newGame = await gameService.createGame({ title, genre, price, imageUrl, description });
      setGames((state) => [...state, newGame]);
      setLatestGames([newGame, ...latestGames.slice(0, limit - 1)]);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const contextValues = {
    games,
    latestGames,
    onCreateSubmit,
  };

  return (
    <GameContext.Provider value={contextValues}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};
