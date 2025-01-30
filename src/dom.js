import { todoSection } from "./index";
import { Project } from "./project";


export function createTodoCard(todo, project) {
  
  const projectSection = selectProjectSection(project);
  console.log(projectSection);
  const todoItem = document.createElement("li");
  todoItem.classList.add("card");
  projectSection.appendChild(todoItem);

  const inputCheck = document.createElement("input");
  inputCheck.classList.add("mark-todo");

    inputCheck.addEventListener('click', () => {
        if (inputCheck.checked) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    })

  inputCheck.setAttribute("type", "checkbox");
  const paraTitle = document.createElement("p");
  const divTitle = document.createElement("div");
  divTitle.classList.add('divTitle');
  divTitle.appendChild(inputCheck);
  divTitle.appendChild(paraTitle);

  const paraDescription = document.createElement("p");
  paraDescription.classList.add('todoDescription');
  const paraDate = document.createElement("p");
  const paraPriority = document.createElement("p");
  const divDatePriority = document.createElement("div");
  divDatePriority.appendChild(paraDate);
  divDatePriority.appendChild(paraPriority);
  divDatePriority.classList.add("divDatePriority");


  function textTodo(element, text) {
    element.textContent = text;
  }

  textTodo(paraTitle, todo.title);
  textTodo(paraDescription, todo.description);
  textTodo(paraDate, todo.dueDate);
  textTodo(paraPriority, todo.priority);

  todoItem.appendChild(divTitle); 
  todoItem.appendChild(paraDescription);
  todoItem.appendChild(divDatePriority);

}

export function createProjectSection(projectname) {
  const project = new Project(projectname);
  const ul = document.createElement("ul");
  ul.classList.add(`${projectname}`);
  ul.classList.add('project');
  todoSection.appendChild(ul);
  ul.textContent = `${project.name}`;
  console.log(ul);
  return ul;
}

function selectProjectSection(projectname) {
    const projectSection = document.querySelector(`.${projectname}`);
    return projectSection;
}