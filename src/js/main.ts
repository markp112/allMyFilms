import {searchMovie} from './movies/movie'

//put event handlers onto form controls
const attachEventHandlers = ():void => {
console.log("TCL: attachEventHandlers", attachEventHandlers)
    const inputSearch = document.querySelector('#movie-search');

    inputSearch.addEventListener('change', (e: Event) => searchMovie());
}


window.onload = () => {
console.log("TCL: window.onload -> onload", onload)
    
    attachEventHandlers();
};