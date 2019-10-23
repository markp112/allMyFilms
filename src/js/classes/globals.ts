import { IMovie } from "./movieClass";
import { displayMovie } from "../movies/display";

export class IGlobals {
    _currentPage: number = 1;
    _movies: Array<IMovie> = [];
    _maxMovies: number = 0;
    _apiKey: string = "&apikey=7a0a2352";
    _omdbURL: string = "http://www.omdbapi.com/";
    _yearFilter:string = "";

    set maxMovies(movies: number) {
        this._maxMovies = movies;
    }

    set currentPage(page: number) {
        this._currentPage = page;
    }
    set yearFilter(year:string){
        this._yearFilter = year;
    }
    get movies(): Array<IMovie> {

        if(this._yearFilter != ""){
            return this._movies.filter(movie => movie.year === this._yearFilter);
        }else {
            return this._movies;
        }
    }
    
    get maxMovies():number {
        return this._maxMovies;
    }

    get currentPage():number {
        return this._currentPage;
    }

    get apiKey():string {
        return this._apiKey;
    }
    get omdbURL():string {
        return this._omdbURL;
    }
    addMovie = (movie: IMovie) => {
        this._movies.push(movie);
    };

    clearMovies = ():void =>{
        this._movies = [];
        this._currentPage = 1;
        this._maxMovies = 0;
    };

    isAtEndOfMovies = ():boolean => {
         return this._currentPage * 10 > this._maxMovies ? true : false;
    }
}

export const globalData = new IGlobals();

export const setYear = (evt):void => {
    console.log("setyear called",evt);
    const yearPicker = (<HTMLInputElement>document.querySelector("#year-picker")).value;
    console.log("TCL: yearPicker", yearPicker)

    if(isNaN(parseInt(yearPicker)) && yearPicker !="") return
    if(yearPicker.length < 4 && yearPicker.length > 0) return;

    globalData.yearFilter = yearPicker;
    displayMovie();
}