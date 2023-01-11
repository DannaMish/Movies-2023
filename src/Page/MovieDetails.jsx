import movie from "./movie.json"
import style from "./MovieDetails.module.css";

export function MovieDetails (){
    const Url="https://image.tmdb.org/t/p/w400" + movie.poster_path
    return (
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
    );
}
