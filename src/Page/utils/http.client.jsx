const API = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=5a6341251a6ea4ff8ad19fa7910f516f";

export function get(path){
   return fetch(API + path + API_KEY, {

    }).then((result) => result.json())
}