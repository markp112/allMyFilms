//http://www.omdbapi.com/?i=tt3896198&apikey=7a0a2352
import { IMovie } from '../classes/movieClass';




export const callApiSearch = (keyword:string):Promise<any> => {
console.log("TCL: callApiSearch",keyword)
    const apiKey = "&apikey=7a0a2352";
    const url = `http://www.omdbapi.com/?s=${keyword}${apiKey}`;
    console.log("TCL: url", url)
    
    return new Promise((resolve, reject) => {
        fetch(url)
        .then (response => {
        console.log("TCL: response", response);
            
            resolve(response.json());
            })
        .catch (err => {
            throw new Error(err);
        })
    });
}

const displayMovies = (movies:Array<IMovie>):void => {
    const content =document.querySelector('.content');

    movies.forEach(movie =>{
        let div = document.createElement("div");
        div.innerHTML =`${movie.title}  ${movie.year}`
        content.appendChild(div);
    })

}

export const searchMovie = ():void => {
    let movies = [];
    callApiSearch ('war')
    .then (films => {
    console.log("TCL: films", films)
        
        films.Search.forEach(film =>{
            let movie = new IMovie(
                film.Title,
                film.year,
                film.imdbID,
                film.type,
                film.poster
            );
            movies.push(movie);
        })
        displayMovies(movies);
    })

    
}