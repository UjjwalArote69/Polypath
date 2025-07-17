import axios from "axios";

export const createJournal = async (journalData, token) => {
  const res = await axios.post("http://localhost:5000/api/journals", skillData, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};

export const getAllJournals = async (token) => {
  const res = await axios.get("http://localhost:5000/api/journals", {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};

export const getOneJournals = async (token) => {
  const res = await axios.get(`http://localhost:5000/api/journals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};

export const updateJournal = async (id, journalData, token) => {
  const res = await axios.put(
    `http://localhost:5000/api/journals/${id}`,
    skillData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Required for auth
      },
    }
  );
  return res.data;
};

export const deleteJournal = async (id, token) => {
  const res = await axios.delete(`http://localhost:5000/api/journals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ Required for auth
    },
  });
  return res.data;
};
