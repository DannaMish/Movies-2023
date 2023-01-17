
const API = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=5a6341251a6ea4ff8ad19fa7910f516f";
const API_PARAMQUERY = "&query=";
const API_PARAMPAGE = "&page=";

export function get(path, search, page){
   
   if(!search){
    return fetch(API + path + API_KEY + API_PARAMQUERY + page, {
    }).then((result) => result.json())
    
    } 
    else{
        console.log(API + path + API_KEY + API_PARAMQUERY + search)
       return fetch(API + path + API_KEY + API_PARAMQUERY + search + API_PARAMPAGE + page, {
    
        }).then((result) => result.json())
    } 
    
   /*
    let url =  API + path + API_KEY + ( search ?  API_PARAMQUERY + search : '');
    return  fetch(url, {

    }).then((result) => result.json())
    */
    } ;

    



