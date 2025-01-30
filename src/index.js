"use strict";

import "./styles.css";
import { createTodo } from "./createTodo.js";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { createTodoCard, createProjectSection } from "./dom.js";
import { finishTodo } from "./finishTodo.js";

export const todoSection = document.querySelector(".todo-section");

const nav = document.querySelector("nav");

const todo1 = new Todo("Louça", "Lavar a louça toda", "30-01-2025", "High");
const todo2 = new Todo(
  "Estudar Platão",
  "Estudar Livro II das Leis de Platão",
  "03-02-2025",
  "Medium"
);
const todo3 = new Todo("Fazer crochê", "Costurar um biquini de cogumelos", "05-02-2025", "Low")
createProjectSection('Rabions');

createTodoCard(todo1, 'Rabions');
createTodoCard(todo2, 'Rabions');
createTodoCard(todo3, 'Rabions');

//O projeto deve criar uma ul
//Dentro da ul irá receber o 'li' que será o todo

/* Processos

1 - A lógica da criação dos todos //Feita
2 - Criação da interface 
3 - Manipulação do Dom
4 - localStorage WEB Api

*/
