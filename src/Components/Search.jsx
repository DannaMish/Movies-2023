import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Search() { 
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    };
    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input className={style.searchInput} 
                type="text" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={style.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}
