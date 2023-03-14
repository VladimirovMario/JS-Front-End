import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";
import { MainNavigation } from "./components/MainNavigation";
import { CharactersList } from "./components/CharactersList";
import { Character } from "./components/Character";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <MainNavigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<CharactersList />} />
          {/* For nested routes add at the end: /*    */}
          <Route path="/characters/:characterId/*" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
