export class IMovie {
    _title:string;
    _year:string;
    _imdbID: string;
    _type: string;
    _poster: string;

    constructor ( title: string, year:string, imdbID:string, type: string, poster:string) {
        this._title = title;
        this._year = year;
        this._type = type;
        this._imdbID = imdbID;
        this._poster = poster;
    }

    get title():string {
        return this._title;
    }

    get poster ():string {
        return this._poster;
    }
    
    get year ():string {
        return this._year;
    }

    get imdbID ():string {
        return this._imdbID
    }

    get type():string {
        return this._type;
    }
}