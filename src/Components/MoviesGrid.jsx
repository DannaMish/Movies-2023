
import { MovieCard } from "./MovieCard";
import style from "./MoviesGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";

export function MoviesGrid (){
  //let movies = [];
  const [movies, setMovies] = useState([]);
 const movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=5a6341251a6ea4ff8ad19fa7910f516f";
  useEffect(
    () => {
    fetch(movieUrl)
    .then((result) => result.json())
    .then((data) => {
        setMovies(data.results);
    })
},[])

    return (
        <ul className={style.moviesGrid}>
            {movies.map((movie) => 
              <MovieCard key={movie.id} movie={movie}/>
            )}
         </ul>
         );
     }