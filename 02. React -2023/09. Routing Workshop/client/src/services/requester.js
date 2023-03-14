export const request = async (method, url) => {
  const response = await fetch(url, { method });
  // Response { type: "cors", url: "http://localhost:3030/jsonstore/games", redirected: false, status: 204, ok: true, statusText: "No Content", headers: Headers(0), body: ReadableStream, bodyUsed: false }
  
  let result = {};
  
  if (response.status != 204) {
    result = await response.json();
  }
  return result;
};
