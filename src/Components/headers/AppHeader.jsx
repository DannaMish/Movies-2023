import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import style from "../../App.module.css"

export function AppHeader() {
    return (
        <header>
            <Link to="/">
                <h1 className={style.title}>Movies 2023</h1>
            </Link>
            <Link to="/main">
                <button className={style.butto}> Ir a la pagina principal. </button>
            </Link>
            
         </header>
    )
}