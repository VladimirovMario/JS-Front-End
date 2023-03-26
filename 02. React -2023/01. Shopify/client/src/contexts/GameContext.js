import { createContext, useContext, useEffect, useState } from "react";
import { getAllGames, getLatestsGames } from "../services/gameService";
// import { useAuthContext } from "./AuthContext";

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);
  const limit = 3;

  //   const { token } = useAuthContext();
  //   console.log(token);

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

  const contextValues = {
    games,
    latestGames,
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
