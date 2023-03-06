import "./App.css";
import Counter from "./components/Counter";
import MovieList from "./components/MovieList";
import Timer from "./components/Timer";

function App() {
  const movies = [
    {
      title: "Man of Steel",
      year: 2013,
      cast: ["Henry Cavill", "Amy Adams"],
    },
    {
      title: "The Lord of the Rings: The Rings of Power",
      year: 2022,
      cast: ["Morfydd Clark", "Ismael Cruz Cordova"],
    },
    {
      title: "The Witcher",
      year: 2019,
      cast: ["Henry Cavill", "Freya Allan"],
    },
  ];

  // console.log('App Render');

  return (
    <div className="App">
      <h1>React Demo</h1>
      <Counter counter={0}/>

      <Timer start={5}/>

      <MovieList movies={movies} />

    </div>
  );
}

export default App;
