export const getSearchString = (): string => {
    return (<HTMLInputElement>document.querySelector("#movie-search")).value;
};

export const getYear = (): string => {
    return (<HTMLInputElement>document.querySelector("year-picker")).value;
}