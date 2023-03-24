import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useLocalStorage('auth', {});
  const navigate = useNavigate();

  const authService = authServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      alert(error.message);
    }
  };

  const registerSubmit = async (data) => {
    const { "confirm-password": repeatPass, ...registerData } = data;
    try {
      if (repeatPass !== registerData.password) {
        throw new Error("Password's don't match!");
      }
      const result = await authService.register(registerData);
      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      alert(error.message);
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const contextValue = {
    onLoginSubmit,
    registerSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};