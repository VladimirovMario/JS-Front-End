import { Fragment } from "react";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Profile from "./components/Auth/Profile/Profile";
import Register from "./components/Auth/Register/Register";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import NotFound from "./components/NotFound/NotFound";
import ProductList from "./components/ProductList/ProductList";
import InfoMessage from "./components/Shared/InfoMessage/InfoMessage";

function App() {
  return (
    <Fragment>

      {/* In case of Error or Success */}
      <InfoMessage />

      <Header />

      <main>
        {/* Home section */}
        <Hero />
        <ProductList />

        {/* Catalog section*/}
        <Catalog />

        {/* Details component */}
        <Details />

        {/* Create component */}
        <Create />

        {/* Edit component */}
        <Edit />

        {/* Register component */}
        <Register />

        {/* Login component */}
        <Login />

        {/* Profile component */}
        <Profile />

        {/* NotFound component*/}
        <NotFound />
        
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
