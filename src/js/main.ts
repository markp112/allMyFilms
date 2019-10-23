import { searchMovie } from './movies/movie';
import { scrollPage } from './scrolling';
import { setYear } from './classes/globals';


//put event handlers onto form controls
const attachEventHandlers = ():void => {
    const inputSearch = document.querySelector('#movie-search');
    inputSearch.addEventListener('change', () => searchMovie());
    const content = document.querySelector('.content');
    content.addEventListener('wheel', (evt) => scrollPage(evt), { capture: false, passive: true});
    const inputYear = document.querySelector('#year-picker');
    inputYear.addEventListener('change', (evt) => setYear(evt));
    // inputYear.addEventListener("keyup", (evt) => setYear(evt));
}

window.onload = () => {
    attachEventHandlers();
};