import { todoSection } from "../index";
import { createProjectSection } from "./dom";

export const completed = document.querySelector(".finish");


export function completeSection () {
    todoSection.innerHTML = ""; 
    const project = document.createElement("div");
    project.classList.add("project");
    project.textContent = "Completed";
    todoSection.appendChild(project);  
}


