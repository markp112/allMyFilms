import { searchMovie } from './movies/movie';
import { scrollPage } from './eventHandlers';
import { setYear } from './classes/globals';
import { addToLocalStorage, categoryTypes } from './localStorage/localStorage';
import { updatePill } from './movies/display';


//put event handlers onto form controls
const attachEventHandlers = (): void => {
    const inputSearch = document.querySelector('#movie-search');
    inputSearch.addEventListener('change', () => searchMovie());
    const content = document.querySelector('.content');
    content.addEventListener('wheel', (evt) => scrollPage(evt), { capture: false, passive: true});
    const inputYear = document.querySelector('#year-picker');
    inputYear.addEventListener('change', () => setYear());
}

window.onload = () => {
    attachEventHandlers();
};