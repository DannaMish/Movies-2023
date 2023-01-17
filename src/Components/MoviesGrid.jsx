
import { MovieCard } from "./MovieCard";
import style from "./MoviesGrid.module.css"
import { useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { useState } from "react";
import { get } from "../Page/utils/http.client";
import { Spinner } from "../Components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export function MoviesGrid (){
  const [movies, setMovies] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage  ] = useState(1);
  const [ hasMore, setHasmore ] = useState(true)

  const query = useQuery();
  const search = query.get("search");
  console.log(search);
  

 //const movieUrl = "https://api.themoviedb.org/3/discover/movie?api_key=5a6341251a6ea4ff8ad19fa7910f516f";
  useEffect(() => {
      setIsLoading(true);
      const searchUrl = search ? "/search/movie"
       : "/discover/movie";

      get(searchUrl, search, page).then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setHasmore(data.page < data.total_pages);
        setIsLoading(false);
    });
},[search, page]);

if(isLoading) {
  return <Spinner />;
}

    return (
      <InfiniteScroll dataLength={movies.length} 
      hasMore={hasMore} 
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
      >
        <ul className={style.moviesGrid}>
            {movies.map((movie) => 
              <MovieCard key={movie.id} movie={movie}/>
             
            )}
            
         </ul>
         </InfiniteScroll>
         );
     }