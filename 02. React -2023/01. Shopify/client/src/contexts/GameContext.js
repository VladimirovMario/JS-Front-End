import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  gameServiceFactory,
  getAllGames,
  getLatestsGames,
} from "../services/gameService";
import { commentServiceFactory } from "../services/commentService";

import { useAuthContext } from "./AuthContext";

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [latestGames, setLatestGames] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const gameService = gameServiceFactory(token);
  const commentService = commentServiceFactory(token);
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
      const newGame = await gameService.createGame({
        title,
        genre,
        price,
        imageUrl,
        description,
      });
      setGames((state) => [...state, newGame]);
      setLatestGames([newGame, ...latestGames.slice(0, limit - 1)]);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const onEditSubmit = async (data) => {
    let { title, genre, price, imageUrl, description } = data;
    price = Number(price);
    const id = data._id;
    try {
      const updatedGame = await gameService.editGame(id, {
        title,
        genre,
        price,
        imageUrl,
        description,
      });
      const updatedState = (state) =>
        state.map((game) => (game._id === id ? updatedGame : game));
      setGames(updatedState);
      setLatestGames(updatedState);
      navigate(`/catalog/${id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // TODO see how to fix the problem
  // https://blog.logrocket.com/why-react-doesnt-update-state-immediately/
  const onDeleteSubmit = async ({ _id }) => {
    const id = _id;
    try {
       await gameService.deleteGame(id);
      // const updatedState = (state) => state.filter((game) => game._id !== id);
      setGames((state) => state.filter((game) => game._id !== id));
      setLatestGames((state) => state.filter((game) => game._id !== id));

      // TODO: if(latestGames.length < limit) add game in that place where was the deleted one!
      if (latestGames.length < limit) {
        setLatestGames(games.slice(-limit).reverse());
      }
     navigate(`/`);
    } catch (error) {
      alert(error.message);
    }
  };

  const addGameToFavorites = async (gameId) => {
    try {
      // TODO the result is the whole game, so we can add game title to success message
      await gameService.addGameToFavorites(gameId);
    } catch (error) {
      alert(error.message);
    }
  };

  // Comments functionality
  const createComment = async (gameId, commentsData) => {
    const { subject, content } = commentsData;
    try {
      const result = await commentService.createComment(gameId, {
        subject,
        content,
      });
      return result;
    } catch (error) {
      alert(error.message);
    }
  };

  const contextValues = {
    games,
    latestGames,
    onCreateSubmit,
    onEditSubmit,
    onDeleteSubmit,
    addGameToFavorites,
    createComment,
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
