import { requestFactory } from "./requester";

const limit = 3;

const endpoints = {
  data: "/api/game",
  details: "/api/game/",
  latest: `/api/?limit=${limit}`,
};

const request = requestFactory();

export const getAll = async () => {
  return await request.get(endpoints.data);
};

export const getById = async (gameId) => {
  return await request.get(endpoints.details + gameId);
};

export async function getLatestsGames() {
  const result = await request.get(endpoints.latest);
  console.log(result);
  return result;
}
