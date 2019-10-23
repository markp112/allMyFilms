import { IMovie } from "../classes/movieClass";
import { globalData } from "../classes/globals";

export enum categoryTypes {
  WatchedMovie,
  Bookmark

}

export const addToLocalStorage = (category: categoryTypes, omdbID: string ):number => {

  let movie: IMovie = globalData.getMoviebyID(omdbID);
  let itemCount = 0;
  if(movie){
    let data:Array<IMovie> = JSON.parse(localStorage.getItem(category.toString()));
    console.log('data :', data);

    if (data === null) data = [];
    data.push(movie);
    localStorage.setItem(category.toString(), JSON.stringify(data));
    itemCount = data.length;
  }
  return itemCount;
}

