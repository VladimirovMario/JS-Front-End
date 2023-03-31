import { requestFactory } from "./requester";

const endpoints = {
  allComments: "/api/comments/",
};

const request = requestFactory();

export const getCommentsById = async (gameId) => {
  return await request.get(endpoints.allComments + gameId);
};
