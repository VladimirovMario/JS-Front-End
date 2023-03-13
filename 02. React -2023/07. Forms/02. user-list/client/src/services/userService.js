const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const userData = await response.json();

  return userData.users;
};

export const getUser = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`);
  const userData = await response.json();

  return userData.user;
};

export const createUser = async (userData) => {
  const { streetNumber, street, city, country, ...data } = userData;
  data.address = { streetNumber, street, city, country };
  // console.log('Data from createUser', data);

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result.user;
};

export const updateUser = async (userId, userData) => {
  const { streetNumber, street, city, country, ...data } = userData;
  data.address = { streetNumber, street, city, country };
  // console.log('Data from updateUser', data);

  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result.user;
};

export const onDelete = async (userId) => {
  const response = await fetch(`${baseUrl}/${userId}`, {
    method: "Delete",
  });

  const result = await response.json();
  console.log("Delete result", result);
  return result;
};
