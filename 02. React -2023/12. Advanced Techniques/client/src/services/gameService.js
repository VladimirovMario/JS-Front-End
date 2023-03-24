import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/games";

export const gameServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const data = await request.get(baseUrl);
    const games = Object.values(data);
    return games;
  };

  const getOne = async (gameId) => {
    const data = await request.get(`${baseUrl}/${gameId}`);
    return data;
  };

  const create = async (data) => {
    const result = await request.post(baseUrl, data);
    return result;
  };

  const deleteGame = (gameId) => request.delete(`${baseUrl}/${gameId}`);

  const edit = async (gameId, data) => {
    const result = await request.put(`${baseUrl}/${gameId}`, data);
    return result;
  };

  return {
    getAll,
    getOne,
    create,
    delete: deleteGame,
    edit,
  };
};
