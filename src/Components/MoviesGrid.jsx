
import { MovieCard } from "./MovieCard";
import style from "./MoviesGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../Page/utils/http.client";
import { Spinner } from "../Components/Spinner";


export function MoviesGrid (){
  //let movies = [];
  const [movies, setMovies] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  

 //const movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=5a6341251a6ea4ff8ad19fa7910f516f";
  useEffect(
    () => {
      setIsLoading(true);
      
    get("/discover/movie")
    .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
    })
},[])

if(isLoading) {
  return <Spinner />;
}

    return (
        <ul className={style.moviesGrid}>
            {movies.map((movie) => 
              <MovieCard key={movie.id} movie={movie}/>
            )}
         </ul>
         );
     }