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

export const updateSkill = async (id, skillData, token) => {
  const res = await axios.put(
    `http://localhost:5000/api/skills/${id}`,
    skillData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Required for auth
      },
    }
  );
  return res.data;
};

export const deleteSkill = async (id, token) => {
  const res = await axios.delete(`http://localhost:5000/api/skills/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};
