const ENDPOINT = "https://api.github.com/users";

import { showUsers } from "./showusers.js";

const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const users = await response.json();
    showUsers(users);
    return users;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
