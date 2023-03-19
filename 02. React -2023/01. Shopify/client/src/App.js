import { Fragment, useEffect, useState } from "react";
import "./App.css";

import InfoMessage from "./components/Shared/InfoMessage/InfoMessage";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage/HomePage";
import Catalog from "./components/Catalog/Catalog";
import Details from "./components/Details/Details";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Profile from "./components/Auth/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

import * as gameService from "./services/gameService";
import { Route, Routes } from "react-router-dom";

function App() {
  const [games, setGames] = useState([]);

  // TODO finish the errors
  // const [errors, setErrors] = useState({});

  useEffect(() => {
    gameService
    // TODO see how to load separately
      // .getLatestsGames()
      .getAll()
      .then((result) => {
        setGames(result);
        console.log(result);
      })
      .catch((err) => {
        console.error(err.message);
        // setErrors(err);
      });
  }, []);

  return (
    <Fragment>
      {/* In case of Error or Success */}
      <InfoMessage />

      <Header />

      <main>
        <Routes>

          <Route path="/" element={<HomePage games={games}/>} />
          <Route path="/catalog" element={<Catalog games={games} />} />

          <Route path="/catalog/:gameId" element={<Details />} />
          <Route path="/create-product" element={<Create />} />

          <Route path="/edit" element={<Edit />} />

          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
