import { requestFactory } from "./requester";

const endpoints = {
  allGames: "/api/game",
  createGame: "/api/game",
  editGame: "/api/game/",
  details: "/api/game/",
  latest: (limit) => `/api/?limit=${limit}`,
};

const request = requestFactory();

export const getAllGames = async () => {
  return await request.get(endpoints.allGames);
};

export const getById = async (gameId) => {
  return await request.get(endpoints.details + gameId);
};

export const getLatestsGames = async (limit) => {
  return await request.get(endpoints.latest(limit));
};

export const gameServiceFactory = (token) => {
  const authorizedRequest = requestFactory(token);

  const createGame = async (data) => {
    return await authorizedRequest.post(endpoints.createGame, data);
  };

  const editGame = async (id, data) => {
    return await authorizedRequest.put(`${endpoints.editGame}/${id}`, data);
  };

  return {
    createGame,
    editGame,
  };
};
