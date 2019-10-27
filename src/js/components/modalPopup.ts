import { IPlot } from "../classes/plotClass";
import { IRating } from "../classes/ratingClass";


export const showModal = () => {
  document.querySelector("#modal-popup").classList.add("modal-visible");
  document.querySelector("#modal-popup").classList.remove("modal-hidden");

}

export const closeModal = () => {
  document.querySelector("#modal-popup").classList.remove("modal-visible");
  document.querySelector("#modal-popup").classList.add("modal-hidden");
}
const getMovieTitle = (title: string): string => {
  return `<h2> ${title.toString()}</h2>`
}

const getPlotHtmlString = (plotItem: string, moviePlot: IPlot): string => {
  return `<p><span>${plotItem}:</span> ${moviePlot[plotItem].toString()}</p>`
}

const getRatingHtmlString = (ratingItem: Array<IRating>, moviePlot: IPlot): string => {
  let ratingString = '<p><span>Ratings: </span></p>';
  ratingItem.forEach(rating => {
    ratingString += `<p class="rating">${rating.Source} ${rating.Value}</p>`;
  });
  return ratingString;
}
export const addContentToModal = (moviePlot: IPlot): void => {
  // let plotDetails = `<span>Actors:</span> ${moviePlot.Actors.toString()}`
  let plotDetails = getMovieTitle(moviePlot.Title);
  plotDetails += getPlotHtmlString("Actors", moviePlot);
  plotDetails += getPlotHtmlString("Awards", moviePlot);
  plotDetails += getPlotHtmlString("BoxOffice", moviePlot);
  plotDetails += getPlotHtmlString("Director", moviePlot);
  plotDetails += getPlotHtmlString("Genre", moviePlot);
  plotDetails += getPlotHtmlString("Plot", moviePlot);
  plotDetails += getRatingHtmlString(moviePlot.Ratings, moviePlot);
  plotDetails += getPlotHtmlString("Released", moviePlot);
  plotDetails += getPlotHtmlString("Runtime", moviePlot);
  plotDetails += getPlotHtmlString("imdbRating", moviePlot);
  plotDetails += getPlotHtmlString("imdbVotes", moviePlot);
  document.querySelector(".popup-content").innerHTML = plotDetails;
  showModal();
}