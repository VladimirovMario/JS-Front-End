import { requestFactory } from "./requester";


const endpoints = {
  allGames: "/api/game",
  details: "/api/game/",
  latest: (limit)=> `/api/?limit=${limit}`,
};

const request = requestFactory();

export const getAllGames = async () => {
  return await request.get(endpoints.allGames);
};

export const getLatestsGames = async (limit) => {
  const result = await request.get(endpoints.latest(limit));
  console.log(result);
  return result;
};

export const gameServiceFactory = () => {
  const getById = async (gameId) => {
    return await request.get(endpoints.details + gameId);
  };

  return {
    getById,
  };
};
