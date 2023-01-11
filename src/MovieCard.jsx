 import style from "./MovieCard.module.css"

export function MovieCard({movie}){
const Url="https://image.tmdb.org/t/p/w300" + movie.poster_path
return <li className={style.movieCard}>
        <img 
        width={230}
        height={345}
        className={style.movieImage} 
        src={Url} 
        alt={movie.title} />
        <div>{movie.title}</div>
    </li>
}