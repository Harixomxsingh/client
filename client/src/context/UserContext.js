import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const value = { setUserInfo, userInfo };
  return <UserContext.Provider value={value}>{children};</UserContext.Provider>;
};
