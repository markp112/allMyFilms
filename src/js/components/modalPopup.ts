import { IPlot } from "../classes/plotClass";


export const showModal = () => {
  document.querySelector("#modal-popup").classList.add("modal-visible");
  document.querySelector("#modal-popup").classList.remove("modal-hidden");
  
}

export const closeModal = () => {
  document.querySelector("#modal-popup").classList.remove("modal-visible");
  document.querySelector("#modal-popup").classList.add("modal-hidden");
}

export const addContentToModal = (moviePlot: IPlot):void => {
  let plotDetails = `Actors:${moviePlot.Actors.toString()}`
  document.querySelector(".modal-content").innerHTML = plotDetails;
  showModal();
}