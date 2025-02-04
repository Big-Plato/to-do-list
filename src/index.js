"use strict";

import "./styles.css";
// import { Todo } from "./modules/todo.js"
// import { createTodoCard, createProjectSection } from "./modules/dom.js";
import { retrieveFromLocalStorage } from "./modules/localStorage.js"

document.addEventListener("DOMContentLoaded", () => {
  retrieveFromLocalStorage();
})

export const todoSection = document.querySelector(".todo-section");

export function projectInterval (projectname) {
  const select = document.querySelector("#select-project");
  const option = document.createElement("option");
  option.textContent = projectname;
  select.appendChild(option);
}



/* Processos

1 - A lógica da criação dos todos //Feita
2 - Criação da interface //Feito
3 - Manipulação do Dom //Quase completa
4 - localStorage WEB Api //Ainda não
5 - datefns (Fazer com que apareça no todo o tempo que falta para ser concluiído) //Ainda não
6 - consertar todo para to do //Quase
*/
