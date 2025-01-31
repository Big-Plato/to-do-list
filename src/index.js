"use strict";

import "./styles.css";
import { createTodo } from "./createTodo.js";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { createTodoCard, createProjectSection } from "./dom.js";
import { finishTodo } from "./finishTodo.js";

export const todoSection = document.querySelector(".todo-section");

const nav = document.querySelector("nav");

const todo1 = new Todo("Louça", "Lavar louça pra caramba nessa moléstia", "30-01-2025", "High");
const todo2 = new Todo(
  "Estudar Platão",
  "Estudar Livro II das Leis de Platão",
  "03-02-2025",
  "Medium"
);
const todo3 = new Todo("Fazer crochê", "Costurar um biquini de cogumelos", "05-02-2025", "Low")
createProjectSection('Rabions');
createProjectSection('Fifias');

createTodoCard(todo1, 'Rabions');
createTodoCard(todo2, 'Rabions');
createTodoCard(todo3, 'Rabions');

const selectProject = document.querySelectorAll("ul");
const select = document.querySelector("select");

selectProject.forEach((project) => {
  const option = document.createElement("option");
  const classAttr = project.getAttribute('class');
  const firstClass = classAttr.split(" ");
  console.log(classAttr);
  option.textContent = firstClass[0];
  console.log(option.textContent);
  select.appendChild(option);
})

/* Processos

1 - A lógica da criação dos todos //Feita
2 - Criação da interface 
3 - Manipulação do Dom
4 - localStorage WEB Api
5 - datefns (Fazer com que apareça no todo o tempo que falta para ser concluiído)
6 - consertar todo para to do
*/
