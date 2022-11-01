import { createContext, useState } from "react";

const userAuthContext = createContext({});

export const AuthUser = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <userAuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </userAuthContext.Provider>
  );
};

export default userAuthContext;
