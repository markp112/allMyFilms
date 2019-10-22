
const createCardHead = (title: string, hasWatched: boolean):string => {
    const wrapper: string = "<div class='card-header'>";
    const p: string =  `<p>${title}</p>`;
    const i: string = hasWatched ? '<i class="fas fa-binoculars watched"></i>' : '<i class="fas fa-binoculars"></i>';
    const closeTag: string = '</div>';
    return `${wrapper}${p}${i}${closeTag}`;
}

const createCardBody = (image:string): string => {
    const wrapper: string = "<div class='card-body'>";
    const img: string = `<img src="${image}"/>`;
    const closeTag: string = '</div>';
    return `${wrapper}${img}${closeTag}`;
}

const createCardFooter = (year: string, imdbID: string):string => {
    const wrapper: string = "<div class='card-footer'>";
    const p: string =  `<p>Year: ${year}</p>`;
    const pimdb: string = `<p>imdbID: ${imdbID}</p>`;
    const closeTag: string = '</div>';
    return `${wrapper}${p}${pimdb}${closeTag}`;
}

export const displayMovie = (movies):void =>{

    let contentContainer = document.querySelector(".content");
    contentContainer.innerHTML = "";
    try {
        movies.forEach(movie =>{
            const cardHead = createCardHead(movie.title, false);
            const cardBody = createCardBody(movie.poster);
            const cardFooter = createCardFooter(movie.year, movie.imdbID);
            const card = `<div class="card">${cardHead}${cardBody}${cardFooter}</div>`;
            console.log(card)
            contentContainer.innerHTML += card;
        })
       
    
    } catch (error) {
        //output  errors to console to aid debbugging should be removed from final production code.
        console.log("import data failed with err", error);
        throw new Error(error)
    }
}