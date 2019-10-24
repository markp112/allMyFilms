import {  globalData } from "../classes/globals";

export const getNextMovies = (keyword: string, page: Number): Promise<any> => {
    const apiKey = globalData.apiKey;
    const url = `${globalData.omdbURL}?s=${keyword}&page=${page}${apiKey}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                resolve(response.json());
            })
            .catch(err => {
                throw new Error(err);
            });
    });
};


export const callApiSearch = (keyword: string): Promise<any> => {
    const apiKey = globalData.apiKey;
    const url = `http://www.omdbapi.com/?s=${keyword}${apiKey}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                resolve(response.json());
            })
            .catch(err => {
                throw new Error(err);
            });
    });
};

export const getMoviePlot = (imdbID: string):Promise<any> => {
    const apiKey = globalData.apiKey;
    const url = `${globalData.omdbURL}?i=${imdbID}&plot=full${apiKey}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                resolve(response.json());
            })
            .catch(err => {
                throw new Error(err);
            });
    });
}
