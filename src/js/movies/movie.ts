//http://www.omdbapi.com/?i=tt3896198&apikey=7a0a2352
import { IMovie } from '../classes/movieClass';
import { displayMovie } from './display';

export const callApiSearch = (keyword:string):Promise<any> => {
    const apiKey = "&apikey=7a0a2352";
    const url = `http://www.omdbapi.com/?s=${keyword}${apiKey}`;
    return new Promise((resolve, reject) => {
        fetch(url)
        .then (response => {
            resolve(response.json());
            })
        .catch (err => {
            throw new Error(err);
        })
    });
}
const getSearchString = (): string => {
    return (<HTMLInputElement>document.querySelector('#movie-search')).value;
}

export const searchMovie = ():void => {
    let movies = [];
    
    const searchString = getSearchString();

    callApiSearch (searchString)
    .then (films => {
        films.Search.forEach(film =>{
        console.log('film :', film);
            
            let movie = new IMovie(
                film.Title,
                film.Year,
                film.imdbID,
                film.Type,
                film.Poster
            );
            movies.push(movie);
        })
        displayMovie(movies);
    })

    
}