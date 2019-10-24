import { IMovie } from "../classes/movieClass";
import { globalData } from "../classes/globals";

export enum categoryTypes {
  WatchedMovie,
  Bookmark
}

export const addToLocalStorage = (category: categoryTypes, omdbID: string ):number => {
  let movie: IMovie = globalData.getMoviebyID(omdbID);
  let data: Array<IMovie> = JSON.parse(localStorage.getItem(categoryTypes[category]));
  if (data === null) data = [];
  let itemCount =data.length;
  if(movie){
    data.push(movie);
    localStorage.setItem(categoryTypes[category], JSON.stringify(data));
    itemCount++;
  }
  return itemCount;
}

export const getItemCount = (category: categoryTypes): number => {
  let data = JSON.parse(localStorage.getItem(categoryTypes[category]));
  return data === null ? 0 : data.length;
}

export const getMoviesList = (category: categoryTypes): Array<IMovie> => {
  let data: Array<IMovie> = JSON.parse(localStorage.getItem(categoryTypes[category]));
  return data === null ? [] : data;
}