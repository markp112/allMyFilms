import { TemplateElement } from "@babel/types";
import { TemplateBuilder } from "@babel/template";

export const displayMovie = (movies):void =>{

     try {
        let cardElement = document.querySelector('#cardTemplate') as any;
        let cardTemplate = cardElement.import;
        let card = cardTemplate.querySelector('.card');
        card.querySelector('.card-head').innerHTML = displayCardHead(project);
        card.querySelector('.card-body img').src = displayCardBody(project);
        card.querySelector('.card-footer').innerHTML = displayCardFoote(project);
        let contentContainer = document.querySelector("#grid-container");
        contentContainer.appendChild(card.cloneNode(true),card);
        return card; 
    } catch (error) {
        //output  errors to console to aid debbugging should be removed from final production code.
        console.log("import data failed with err", error);
        throw new Error("Error:",error)
    }
}