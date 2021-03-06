
import { IMovie } from "../classes/movieClass";
import { displayMovie, displayMaxMovies } from "./display";
import { globalData } from "../classes/globals";
import { getSearchString } from "./utilities";
import { callApiSearch } from "./omdbCalls";


export const addFilmsToGlobalData = (films: Array<any>): void => {
    films.forEach(film => {
        let movie = new IMovie(
            film.Title,
            film.Year,
            film.imdbID,
            film.Type,
            film.Poster
        );
        globalData.addMovie(movie);
    });
};

export const searchMovie = (): void => {
    const searchString = getSearchString();
    callApiSearch(searchString).then(films => {
        globalData.clearMovies();
        globalData.maxMovies = films.totalResults;
        addFilmsToGlobalData(films.Search);
        displayMovie();
        displayMaxMovies();
    });
};

export const addMoviesToGlobalData = (movies:Array<IMovie>):void => {
    movies.forEach(movie =>{ 
        let classMovie = new IMovie(
            movie._title,
            movie._year,
            movie._imdbID,
            movie._type,
            movie._poster
        );
        globalData.addMovie(classMovie)});
}
