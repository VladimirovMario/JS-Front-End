import { requestFactory } from "./requester";

const endpoint = {
  login: "/api/user/login",
  register: "/api/user/register",
  logout: "/api/user/logout",
};

export const authServiceFactory = (token) => {
  const request = requestFactory(token);
  return {
    login: ({ email, password }) => request.post(endpoint.login, { email, password }),

    register: (data) => {
      console.log('>>> From authServiceFactory',data);
      request.post(endpoint.register, data);
    },
    logout: () => request.get(endpoint.logout),
  };
};
