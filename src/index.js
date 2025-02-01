"use strict";

import "./styles.css";
import { createTodo } from "./createTodo.js";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { createTodoCard, createProjectSection } from "./dom.js";
import { finishTodo } from "./finishTodo.js";

export const todoSection = document.querySelector(".todo-section");

const todo1 = new Todo("Wash dishes", "Wash dishes from the yesterday dinner", "30-01-2025", "High");
const todo2 = new Todo(
  "Study Plato",
  "Read Book II of Laws",
  "03-02-2025",
  "Medium"
);
const todo3 = new Todo("Market", "Go to market", "05-02-2025", "High")
createProjectSection('Default');

createTodoCard(todo1, 'Default');
createTodoCard(todo2, 'Default');
createTodoCard(todo3, 'Default');

export function projectInterval (projectname) {
  const selectProject = projectInterval.getAttribute('class');
  console.log(selectProject);
  const select = document.querySelector("#select-project");
  console.log(select);

  const option = document.createElement("option");
  const classAttr = selectProject[i].getAttribute('class');
  const firstClass = classAttr.split(" ");
  option.textContent = firstClass[0];
  select.appendChild(option);
}

// setInterval(projectInterval, 1000);

/* Processos

1 - A lógica da criação dos todos //Feita
2 - Criação da interface 
3 - Manipulação do Dom
4 - localStorage WEB Api
5 - datefns (Fazer com que apareça no todo o tempo que falta para ser concluiído)
6 - consertar todo para to do
*/
