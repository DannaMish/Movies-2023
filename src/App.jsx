import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./Page/MovieDetails";
import { LandingPage } from "./Page/LandingPage";
import { Main } from "./Page/Main";
import { AppHeader } from "./Components/headers/AppHeader";

export function App(){
    return (
            
        <Router>
            <>
                <Routes>
                    <Route path="/movies/:movieId" element={<AppHeader />}></Route>
                    <Route path="/" element={<AppHeader />}></Route>

                </Routes>
            </>
            <main>
                <Routes>
                    <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
                    <Route path="/main" element={<Main />}></Route>
                    <Route path="/" element={<LandingPage />}></Route>
                </Routes>
            </main>
        </Router>
    );
}