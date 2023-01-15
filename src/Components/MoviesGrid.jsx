
import { MovieCard } from "./MovieCard";
import style from "./MoviesGrid.module.css"
import { useEffect } from "react";
import { useState } from "react";
import { get } from "../Page/utils/http.client";
import { Spinner } from "../Components/Spinner";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function MoviesGrid (){
  const [movies, setMovies] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);
  

 //const movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=5a6341251a6ea4ff8ad19fa7910f516f";
  useEffect(() => {
      setIsLoading(true);
      const searchUrl = search ? "/search/movie" : "/discover/movie";
      
      get(searchUrl, search).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
    });
},[search]);

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