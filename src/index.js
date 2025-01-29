"use strict";

import "./styles.css";
import { createTodo } from "./createTodo.js";
import { Todo } from "./todo.js";
import { Project } from "./project.js";

const body = document.querySelector('body');
const container = document.createElement('div');
body.appendChild(container);

const rebians = new createTodo('Rebians', 'Hilous', '12-07-25', 'High');
console.log(rebians);
console.log(rebians.description)
console.log(rebians.dueDate)
console.log(rebians.showTodo())

const pakons = new Project('Pirous');

console.log("O projeto se chama " + pakons.show)

const nav = document.querySelector('nav');
const ul = document.createElement('ul');
nav.appendChild(ul);

for (let i = 0; i < 20; i++) {
    const li = document.createElement('li');
    li.textContent = "Sanapiasnos";
    ul.appendChild(li);
}






//O projeto deve criar uma ul
//Dentro da ul irá receber o 'li' que será o todo



/* Processos

1 - A lógica da criação dos todos //Feita
2 - Criação da interface 
3 - Manipulação do Dom
4 - localStorage WEB Api

*/