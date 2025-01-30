import { Todo } from "./todo";
import { todoSection } from ".";

export function createTodoCard (todo) {
    const card = document.createElement('div');
    card.classList.add('card');
    todoSection.appendChild(card);

    const inputCheck = document.createElement('input');
    inputCheck.setAttribute("type", "radio");
    const h3Title = document.createElement('h3');
    const paraDescription = document.createElement('p');
    const paraDate = document.createElement('p');
    const paraPriority = document.createElement('p');

    appendTodo = (element) => {
        card.appendChild(element);
    }

    textTodo = (element, text) => {
        element.textContent = text;
    }

    appendTodo(inputCheck);
    appendTodo(h3Title);
    appendTodo(paraDescription);
    appendTodo(paraDate);
    appendTodo(paraPriority);

    textTodo(h3Title, todo.title);
    textTodo(paraDescription, todo.description);
    textTodo(paraDate, todo.dueDate);
    textTodo(paraPriority, todo.priority);
}
