import { getNextMovies } from "./movies/omdbCalls";
import { globalData } from "./classes/globals";
import { getSearchString } from "./movies/utilities";
import { displayMovie, updatePill } from "./movies/display";
import { addFilmsToGlobalData } from './movies/movie';
import { addToLocalStorage, categoryTypes } from "./localStorage/localStorage";

const getNextMoviesSet = () => {
    globalData.currentPage++;
    const searchTerm = getSearchString();
    getNextMovies(searchTerm, globalData.currentPage).then(films => {
        addFilmsToGlobalData(films.Search)
    });
    displayMovie();
};

export const scrollPage = (e): void => {
    const deltaY = e.deltaY;
    if(globalData.isAtEndOfMovies()) return;
    if (deltaY > 0) {
        getNextMoviesSet();
    };
};

export const addToWatched = (imdbID: string):void => {
    console.log("addToWatched");
    let itemCount = addToLocalStorage(categoryTypes.WatchedMovie, imdbID);
    updatePill(categoryTypes.WatchedMovie ,itemCount)
}