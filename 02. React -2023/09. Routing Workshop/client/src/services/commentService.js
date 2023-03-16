import * as request from "./requester";

const baseUrl = "http://localhost:3030/jsonstore/games/comments";

// (unencoded) /data/comments?where=recipeId="8f414b4f-ab39-4d36-bedb-2ad69da9c830"
// GET /data/comments?where=recipeId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22
// GET /games/comments?where=gameId%3D%22401853c9-059f-4d1c-82a8-b1e95377b62c%22

export const getCurrGameComments = async (gameId) => {
  const query = encodeURIComponent(`gameId="${gameId}"`);
  const result = await request.get(`${baseUrl}?where=${query}`);

  const comments = Object.values(result);
  return comments;
};

export const create = async (data) => {
  const result = await request.post(baseUrl, data);
  // console.log(result);
  // Object { gameId: "401853c9-059f-4d1c-82a8-b1e95377b62c", username: "George", comment: "Great game.", _id: "d5f787fc-61fe-43f5-8b06-b024be4cd2f2" }
  return result;
};
