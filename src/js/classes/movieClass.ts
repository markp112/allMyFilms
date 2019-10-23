export class IMovie {
    _title: string;
    _year: string;
    _imdbID: string;
    _type: string;
    _poster: string;
    _emptyPoster:string = '/src/assets/film.png';

    constructor(
        title: string,
        year: string,
        imdbID: string,
        type: string,
        poster: string
    ) {
        this._title = title;
        this._year = year;
        this._type = type;
        this._imdbID = imdbID;
        if(poster === 'N/A') {  
            this._poster = this._emptyPoster
        }else this._poster = poster;
    }

    get title(): string {
        return this._title;
    }

    get poster(): string {
        return this._poster;
    }

    get year(): string {
        return this._year;
    }

    get imdbID(): string {
        return this._imdbID;
    }

    get type(): string {
        return this._type;
    }
}
