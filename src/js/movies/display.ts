import { globalData } from "../classes/globals";
import { categoryTypes } from "../localStorage/localStorage";
import { addToWatched, addToBookmarks, movieCardClicked } from "../eventHandlers";
import { IMovie } from "../classes/movieClass";

const createCardHead = (title: string, hasWatched: boolean): string => {
    const wrapper: string = "<div class='card-header'>";
    const p: string = `<p>${title}</p>`;
    const closeTag: string = "</div>";
    return `${wrapper}${p}${closeTag}`;
};

const createCardBody = (image: string): string => {
    const wrapper: string = "<div class='card-body'>";
    const img: string = `<img src="${image}"/>`;
    const closeTag: string = "</div>";
    return `${wrapper}${img}${closeTag}`;
};

const createCardFooter = (year: string, imdbID: string): string => {
    const wrapper: string = "<div class='card-footer'>";
    const p: string = `<div><p>Year: ${year}</p>`;
    const watched = `<i class="fas fa-binoculars" ></i></div>`;
    const pimdb: string = `<div><p>imdbID: ${imdbID}</p>`;
    const bookmark = `<i class="fas fa-bookmark"></i></div>`;
    const closeTag: string = "</div>";
    return `${wrapper}${p}${watched}${pimdb}${bookmark}${closeTag}`;
};

const putCardOnScreen = (movie:IMovie):void => {
    let contentContainer = document.querySelector(".content");
    const cardHead = createCardHead(movie.title, false);
    const cardBody = createCardBody(movie.poster);
    const cardFooter = createCardFooter(movie.year, movie.imdbID);
    const card = `${cardHead}${cardBody}${cardFooter}`;
    let card1  = document.createElement("div")
    card1.setAttribute("class", "card" );
    card1.innerHTML = card;
    card1.querySelector('.card-body').addEventListener('click',() => movieCardClicked(movie.imdbID));
    card1.querySelector('.fa-binoculars').addEventListener('click',() => addToWatched(movie.imdbID));
    card1.querySelector('.fa-bookmark').addEventListener('click',() => addToBookmarks(movie.imdbID));
    contentContainer.appendChild(card1)
}

export const displayMovie = (): void => {
    let contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    try {
        globalData.movies.forEach(movie => {
            putCardOnScreen(movie)
        });
    } catch (error) {
        //output  errors to console to aid debbugging should be removed from final production code.
        console.log("import data failed with err", error);
        throw new Error(error);
    }
};

export const displayMaxMovies = () => {
    const totalSpan = document.querySelector("#matching-films p span");
    totalSpan.innerHTML = globalData.maxMovies.toString();
}

export const updatePill = (category:categoryTypes, value:number) :void => {
    let element:HTMLSpanElement;
    if(category === categoryTypes.WatchedMovie) {
        element = document.querySelector('#watchedCount');
    } else {
        element = document.querySelector('#toWatchCount');
    }
    element.innerHTML = value.toString();
}