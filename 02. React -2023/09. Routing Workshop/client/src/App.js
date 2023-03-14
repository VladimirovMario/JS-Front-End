import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">

      {/* <Home /> */}
      <Login />

      </main>

    </div>
  );
}

export default App;
