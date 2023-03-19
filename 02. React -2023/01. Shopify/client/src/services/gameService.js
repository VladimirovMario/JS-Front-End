import { get, post, put, del } from "./requester";

const limit = 3;

const endpoints = {
  data: "/api/game",
  details: "/api/game/",
  latest: `/api/?limit=${limit}`,
};

export const getAll = async () => {
  return await get(endpoints.data);
};

export const getById = async (gameId) => {
  return await get(endpoints.details + gameId);
};

export async function getLatestsGames() {
  const result = await get(endpoints.latest);
  console.log(result);
  return result;
}
