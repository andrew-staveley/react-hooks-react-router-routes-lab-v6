import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState(["Loading Movie..."])
  const [movieGenres, setMovieGenres] = useState(["Loading Genres..."])
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((r) => r.json())
    .then((data) => {
      setMovie(data)
      setMovieGenres(data.genres)
    })
  }, []);

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Length: {movie.time} Minutes</p>
        {movieGenres.map((genre) => {
          return <span key={genre}>{genre}</span>
        })}
      </main>
    </>
  );
};

export default Movie;
