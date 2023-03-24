import { useEffect, useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import { gameServiceFactory } from "./services/gameService";
import { authServiceFactory } from "./services/authService";

import { AuthContext } from "./contexts/AuthContext";

import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Logout } from "./components/Logout/Logout";
import { EditGame } from "./components/EditGame/EditGame";

function App() {
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});
  const  gameService  = gameServiceFactory(auth.accessToken);
  const  authService  = authServiceFactory(auth.accessToken);

  useEffect(() => {
    gameService.getAll().then((data) => {
      setGames(data);   
    });
  }, []);

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data);
    setGames((state) => [newGame, ...state]);
    navigate("/catalog");
  };

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

  const onDeleteClickHandler = (gameId) => {
    setGames(state => state.filter(g => g._id !== gameId));
  }

  const onGameEditSubmit = async (values) => {
    const result = await gameService.edit(values._id, values);
    setGames(state => state.map(game => game._id === values._id ? result : game))
    navigate(`/catalog/${values._id}`);
  }

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
    <AuthContext.Provider value={contextValue}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-game" element={<CreateGame onCreateGameSubmit={onCreateGameSubmit} />} />
            <Route path="/catalog" element={<Catalog games={games} />} />
            <Route path="/catalog/:gameId" element={<GameDetails onDeleteClickHandler={onDeleteClickHandler} />} />
            <Route path="/catalog/:gameId/edit" element={<EditGame onGameEditSubmit={onGameEditSubmit} />} />          
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
