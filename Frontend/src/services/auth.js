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

export const createSkill = async (skillData, token) => {
  const res = await axios.post("http://localhost:5000/api/skills", skillData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getSkills = async (token) => {
  const res =  await axios.get("http://localhost:5000/api/skills", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}