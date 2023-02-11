import axios from "axios";

const URL = "http://localhost:5000";

interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  __v: number;
}

export const getUserByUsername = async (username: string) => {
  return await axios.get<User>(`${URL}/users/username/${username}`);
};

export const createUser = async (user: object) => {
  return await axios.post(`${URL}/users/`, user);
};
