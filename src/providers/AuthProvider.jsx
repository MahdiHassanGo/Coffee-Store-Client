import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const createUser = ({ email, password }) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const UserInfo = {
    user,
    loading,
    createUser,
  };

  return <AuthContext.Provider value={UserInfo}></AuthContext.Provider>;
};

export default AuthProvider;
