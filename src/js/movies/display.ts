import { IGlobals, globalData } from "../classes/globals";

const createCardHead = (title: string, hasWatched: boolean): string => {
    const wrapper: string = "<div class='card-header'>";
    const p: string = `<p>${title}</p>`;
    const i: string = hasWatched
        ? '<i class="fas fa-binoculars watched"></i>'
        : '<i class="fas fa-binoculars"></i>';
    const closeTag: string = "</div>";
    return `${wrapper}${p}${i}${closeTag}`;
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
    const watched = `<i class="fas fa-binoculars" click="addToWatched(${imdbID})"></i></div>`;
    const pimdb: string = `<div><p>imdbID: ${imdbID}</p>`;
    const bookmark = `<i class="fas fa-bookmark" click="addToBookmarks(${imdbID})"</i></div>`;
    const closeTag: string = "</div>";
    return `${wrapper}${p}${watched}${pimdb}${bookmark}${closeTag}`;
};

export const displayMovie = (): void => {
    let contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    try {
        globalData.movies.forEach(movie => {
            const cardHead = createCardHead(movie.title, false);
            const cardBody = createCardBody(movie.poster);
            const cardFooter = createCardFooter(movie.year, movie.imdbID);
            const card = `<div class="card">${cardHead}${cardBody}${cardFooter}</div>`;
            contentContainer.innerHTML += card;
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
