import { get, post, put, del } from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
  const data = await get(baseUrl);
  const games = Object.values(data);
   
  return games;
};

export const getOne = async (gameId) => {
  const data = await get(`${baseUrl}/${gameId}`);
  return data;
}

export const create = async (data) => {
  const result = await post(baseUrl, data);
  // console.log('from gameService result', result);
  return result;
}
