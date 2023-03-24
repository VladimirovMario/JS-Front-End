const request = async (method, token, url, data) => {
  const options = {};

  if (method !== "GET") {
    options.method = method;

    if (data) {
      options.headers = {
        "Content-Type": "application/json",
      };

      options.body = JSON.stringify(data);
    }
  }

  if (token) {
    options.headers = {
      ...options.headers,
      "X-Authorization": token,
    };
  }

  const response = await fetch(url, options);
  // Response { type: "cors", url: "http://localhost:3030/jsonstore/games", redirected: false, status: 204, ok: true, statusText: "No Content", headers: Headers(0), body: ReadableStream, bodyUsed: false }

  let result = {};

  if (response.ok === false) {
    result = await response.json();
    throw result;
  }

  if (response.status !== 204) {
    result = await response.json();
  }
  return result;
};

export const requestFactory = (token) => {
  return {
    get: request.bind(null, "GET", token),
    post: request.bind(null, "POST", token),
    put: request.bind(null, "PUT", token),
    delete: request.bind(null, "DELETE", token),
  };
};
