export const request = async (method, url, data) => {
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

  const response = await fetch(url, options);
  // Response { type: "cors", url: "http://localhost:3030/jsonstore/games", redirected: false, status: 204, ok: true, statusText: "No Content", headers: Headers(0), body: ReadableStream, bodyUsed: false }

  let result = {};

  if (response.status !== 204) {
    result = await response.json();
  }
  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
