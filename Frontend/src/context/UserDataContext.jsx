import { createContext, useContext, useEffect, useState } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  

  return (
    <UserDataContext.Provider value={{ user, setUser, loading }}>
      {!loading && children}
    </UserDataContext.Provider>
  );
};

export const useUser = () => useContext(UserDataContext);
