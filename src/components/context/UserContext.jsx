import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const UserContextOptions = {};
  return (
    <UserContext.Provider value={{ ...UserContextOptions }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
