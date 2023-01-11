import { MoviesGrid } from "./MoviesGrid";
import style from "./App.module.css"

export function App(){
    return (
    <div>
        <header>
            <h1 className={style.title}>Movies 2023</h1>
         </header>
        <main>
        <MoviesGrid/>
        </main>
    </div>
    );
}