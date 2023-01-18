import { Link } from "react-router-dom";
import style from "./Main.module.css";

export function Main(){
    return(
    <div className={style.container}>
        <Link to="/">
        <button className={style.butto}>Movies</button>
        </Link>
        
        
        <h1>Bienvenidos a la pagina princial</h1>
          <h2>Movie App</h2>
          <p>Quiero mostrarles un proyecto en el que estuve trabajando,</p> 
            <p>basado en una app de peliculas que utiliza una api,
             en la que puedes buscar con el nombre de la pelicula</p>

        <h2>Movie esta hecho a base de:</h2>

        <ul className={style.ul}>
            <li>React</li>
            <li>JavaScrip</li> 
            <li>Css+</li>
            <li>Diferentes Hooks</li> 
            <li>Api de movie "DTB"</li>
            <li>Scroll Infinity</li>
        
        </ul>

        <img src="image.jpeg" alt="" />

    </div>
    );
}