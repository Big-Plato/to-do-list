"use strict";

import "./styles.css";
import { Todo } from "./modules/todo.js"
import { createTodoCard, createProjectSection } from "./modules/dom.js";
import { retrieveFromLocalStorage } from "./modules/localStorage.js"

document.addEventListener("DOMContentLoaded", () => {
  retrieveFromLocalStorage();
})

export const todoSection = document.querySelector(".todo-section");

const todo1 = new Todo("Wash dishes", "Wash dishes from the yesterday dinner", "30-01-2025", "High");
const todo2 = new Todo(
  "Study Plato",
  "Read Book II of Laws",
  "03-02-2025",
  "Medium"
);
const todo3 = new Todo("Market", "Go to market", "05-02-2025", "High");

createProjectSection('Default');
createProjectSection('Completed'); 

createTodoCard(todo1, 'Default');
createTodoCard(todo2, 'Default');
createTodoCard(todo3, 'Default');

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
