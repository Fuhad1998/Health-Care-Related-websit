import React, { createContext } from "react";
import useFirebase from "../Hooks/UseFirebase";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const addContext = useFirebase();
  return (
    <AuthContext.Provider value={addContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
