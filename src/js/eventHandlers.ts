import { getNextMovies, getMoviePlot } from "./movies/omdbCalls";
import { globalData } from "./classes/globals";
import { getSearchString } from "./movies/utilities";
import { displayMovie, updatePill } from "./movies/display";
import { addFilmsToGlobalData, addMoviesToGlobalData } from './movies/movie';
import { addToLocalStorage, getMoviesList, categoryTypes } from "./localStorage/localStorage";
import { IMovie } from "./classes/movieClass";
import { IPlot } from "./classes/plotClass";
import { addContentToModal, closeModal, showModal } from "./components/modalPopup"


//get the next 10 movies
const getNextMoviesSet = () => {
    globalData.currentPage++;
    const searchTerm = getSearchString();
    getNextMovies(searchTerm, globalData.currentPage).then(films => {
        addFilmsToGlobalData(films.Search);
    });
    displayMovie();
};

// respond to the user scrolling the page if the user has scrolled down fetch
// the next 10 movies, until there are no more movies to fetch in the category
export const scrollPage = (e): void => {
    const deltaY = e.deltaY;
    if (globalData.isAtEndOfMovies()) return;
    if (deltaY > 0) {
        getNextMoviesSet();
    };
};

// add movies ot local storage in the watched category
// input IMDBID used to get the movie data out of the 
// global data array
export const addToWatched = (imdbID: string): void => {
    let itemCount = addToLocalStorage(categoryTypes.WatchedMovie, imdbID);
    updatePill(categoryTypes.WatchedMovie, itemCount);
};

// add movies ot local storage in the too watch category
// input IMDBID used to get the movie data out of the 
// global data array
export const addToBookmarks = (imdbID: string): void => {
    let itemCount = addToLocalStorage(categoryTypes.Bookmark, imdbID);
    updatePill(categoryTypes.Bookmark, itemCount);
};

// retrieve the movies from local storage and put these on the screen
const displayMoviesFromLocalStorage = (category: categoryTypes): void => {
    let movies: Array<IMovie> = getMoviesList(category);
    if (movies.length) {
        globalData.clearMovies();
        addMoviesToGlobalData(movies);
        displayMovie();
    }
};

export const showNavLinks = () => {
    if (document.querySelector('.links').classList.contains('show-links')) {
        document.querySelector('.links').classList.remove('show-links');
    } else {
        document.querySelector('.links').classList.add('show-links');
    }
}

// user has clicked the to watched movies filter for any movies in the watchedList
export const watchedMoviesClicked = (): void => {
    displayMoviesFromLocalStorage(categoryTypes.WatchedMovie);
    showNavLinks();
};

// user has clicked the to watch movies filter for any movies in the too watchlist
export const toWatchClicked = (): void => {
    displayMoviesFromLocalStorage(categoryTypes.Bookmark);
    showNavLinks();
};
// user has clicked on the moive card - show the
// detail about the movie
export const movieCardClicked = (imdbID): void => {
    getMoviePlot(imdbID)
        .then(plot => {
            let moviePlot: IPlot = plot;
            console.log('moviePlot :', moviePlot);
            addContentToModal(moviePlot);
        });
}

// user has clicked on one of the categories
// filter movies by the type
export const movieTypeClick = (): void => {
    const movieTypeFilter = document.getElementsByName('movie-type');
//to be impletemented
}