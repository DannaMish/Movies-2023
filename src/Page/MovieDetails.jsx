import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "./utils/http.client";
import { Spinner } from "../Components/Spinner";
import { AppHeader } from "../Components/headers/AppHeader";

export function MovieDetails (){
    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movie, setMovie ] = useState(null);

    useEffect(() => {
        setIsLoading(true); 

        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if(isLoading) {
        return <Spinner />;
    }
    

    const Url="https://image.tmdb.org/t/p/w400" + movie.poster_path
    return (
    <>
        <div className={style.detailsContainer}>
            <img className={`${style.col} ${style.movieImage}`} 
            src={Url} 
            alt={movie.title} 
            />
            <div className={style.col}>
                <p>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                    <strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(",  ")}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    </>
    );
}
