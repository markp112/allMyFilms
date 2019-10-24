import { searchMovie } from './movies/movie';
import { scrollPage, watchedMoviesClicked, toWatchClicked } from './eventHandlers';
import { setYear } from './classes/globals';
import { getItemCount, categoryTypes } from './localStorage/localStorage';
import { updatePill } from './movies/display'



//put event handlers onto form controls
const attachEventHandlers = (): void => {
    const inputSearch = document.querySelector('#movie-search');
    inputSearch.addEventListener('change', () => searchMovie());
    const content = document.querySelector('.content');
    content.addEventListener('wheel', (evt) => scrollPage(evt), { capture: false, passive: true});
    const inputYear = document.querySelector('#year-picker');
    inputYear.addEventListener('change', () => setYear());
    const WatchedMovie = document.querySelector('#watched-movies-link');
    WatchedMovie.addEventListener('click',() => watchedMoviesClicked())
    const toWatchLink = document.querySelector('#to-watch-link');
    toWatchLink.addEventListener('click',() => toWatchClicked());
}

const getItemCounts = (): void => {
    updatePill(categoryTypes.WatchedMovie, getItemCount(categoryTypes.WatchedMovie));
    updatePill(categoryTypes.Bookmark, getItemCount(categoryTypes.Bookmark));
}

window.onload = () => {
    attachEventHandlers();
    getItemCounts();
};