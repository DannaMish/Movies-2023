import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./Page/MovieDetails";
import { LandingPage } from "./Page/LandingPage";
import style from "./App.module.css"

export function App(){
    return (
    <Router>
          <header>
            <Link to="/">
                <h1 className={style.title}>Movies 2023</h1>
            </Link>
         </header>
          <main>
          <Routes>
               <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
               <Route path="/" element={<LandingPage />}></Route>
          </Routes>
          </main>
    </Router>
    );
}