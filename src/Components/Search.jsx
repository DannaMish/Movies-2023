import style from "./Search.module.css";

export function Search() {
    return (
        <form className={style.searchContainer}>
            <div className={style.searchBox}>
                <input className={style.searchInput} type="text" />
                <button className={style.sarchButton} type="submiit">Buscar</button>
            </div>
        </form>
    );
}
