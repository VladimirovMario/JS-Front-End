import { get, post, put, del } from "./requester";

const limit = 3;

const endpoints = {
  data: "/api",
  latest: `/api/?limit=${limit}`,
};

export const getAll = async () => {
  return await get(endpoints.data);
};

export async function getLatestsGames() {
  const result = await get(endpoints.latest);
  console.log(result);
  return result;
}
