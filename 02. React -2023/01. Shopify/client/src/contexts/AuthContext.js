import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const authService = authServiceFactory(auth.token);
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    // console.log(">>> From authContext onLoginSubmit", data);
    try {
      const result = await authService.login(data);
      setAuth(result);
      navigate("/catalog");
      // console.log(">>> From authContext onLoginSubmit result", result);
      // { email: "peter@abv.bg", _id: ..., token: ... }
    } catch (error) {
      alert(error.message);
    }
  };

  const contextValues = {
    onLoginSubmit,
    userId: auth._id,
    userEmail: auth.email,
    userUsername: auth.username,
    token: auth.token,
    isAuthenticated: !!auth.token,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};