import axios from "axios";

export const createSkill = async (skillData, token) => {
  const res = await axios.post("http://localhost:5000/api/skills", skillData, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};

export const getSkills = async (token) => {
  const res = await axios.get("http://localhost:5000/api/skills", {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};
