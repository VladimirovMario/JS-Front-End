import { get, post, put, del } from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
  const data = await get(baseUrl);
  const games = Object.values(data);
   
  return games;
};
