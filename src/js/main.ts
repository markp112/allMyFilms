import { searchMovie } from './movies/movie';
import { scrollPage, watchedMoviesClicked, toWatchClicked, showNavLinks, movieTypeClick } from './eventHandlers';
import { setYear } from './classes/globals';
import { getItemCount, categoryTypes } from './localStorage/localStorage';
import { updatePill } from './movies/display';
import { closeModal } from './components/modalPopup';



//put event handlers onto form controls
const attachEventHandlers = (): void => {
    const inputSearch = document.querySelector('#movie-search');
    inputSearch.addEventListener('change', () => searchMovie());
    const content = document.querySelector('.content');
    content.addEventListener('wheel', (evt) => scrollPage(evt), {capture: false, passive: true});
    const inputYear = document.querySelector('#year-picker');
    inputYear.addEventListener('change', () => setYear());
    const navLinksMenu = document.querySelector('.fa-bars');
    navLinksMenu.addEventListener('click', () => showNavLinks() )
    const WatchedMovie = document.querySelector('#watched-movies-link');
    WatchedMovie.addEventListener('click',() => watchedMoviesClicked())
    const toWatchLink = document.querySelector('#to-watch-link');
    toWatchLink.addEventListener('click',() => toWatchClicked());
    const modalPopupClose = document.querySelector('.close-button');
    modalPopupClose.addEventListener('click',() => closeModal())
    const movieType = document.querySelector('.movie-type');
    movieType.addEventListener('click', () => movieTypeClick())
}

const getItemCounts = (): void => {
    updatePill(categoryTypes.WatchedMovie, getItemCount(categoryTypes.WatchedMovie));
    updatePill(categoryTypes.Bookmark, getItemCount(categoryTypes.Bookmark));
}

window.onload = () => {
    attachEventHandlers();
    getItemCounts();
};