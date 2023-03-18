const host = "http://localhost:3030";

export const request = async (method, url, data) => {
  const options = {};

  if (method !== "GET") {
    options.method = method;
  }

  if (data !== undefined) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);
    console.log("From requester.js", response);

    if (response.status !== 204) {
      return await response.json();
    }

    return response;
  } catch (error) {
    // alert(error.message);
    throw error;
  }
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
