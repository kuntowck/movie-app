import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css";
import { useState, useEffect } from "react";
import { get } from "./api";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <>
      <div className="myBg ">
        <NavigationBar setMovies={setMovies} />
        <Header />
      </div>
      <MovieList movies={movies} />
    </>
  );
}
