import axios from "axios";

export const registerUser = async (userData) => {
  const res = await axios.post(
    "http://localhost:5000/api/users/register",
    userData
  );
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post(
    "http://localhost:5000/api/users/login",
    userData
  );
  return res.data;
};

