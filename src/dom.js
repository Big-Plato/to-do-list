import { todoSection } from "./index";
import { Project } from "./project";
import { Todo } from "./todo";

const addTodo = document.querySelector('.todo-add');
const addProject = document.querySelector('.project-add');
const dialog = document.querySelector("#dialog-todo");
const dialog2 = document.querySelector("#dialog-project")
const closeDialogBtn = document.querySelector("#close");
const closeDialogBtn2 = document.querySelector("#close-project");
const submitBtn = document.querySelector("#submit");
const submitBtnProject = document.querySelector("#submit-project");


export function createTodoCard(todo, project) {
  
  //Select the proper section of the project you want to add a todo, and then adds
  //a todo
  const projectSection = selectProjectSection(project);
  console.log(projectSection);
  const todoItem = document.createElement("li");
  todoItem.classList.add("card");
  projectSection.appendChild(todoItem);

  const inputCheck = document.createElement("input");
  inputCheck.classList.add("mark-todo");

    //Check that will be used in future to finish a todo
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

addTodo.addEventListener("click", () => {
  dialog.showModal();
});

addProject.addEventListener("click", () => {
  dialog2.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

closeDialogBtn2.addEventListener("click", () => {
  dialog2.close();
})

submitBtn.addEventListener("click", (e) => {
  console.log(e);
  console.log('HIHIHIHIH')
  manipulateInputData();
});

function manipulateInputData () {
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;
  const date = document.querySelector('#date').value;
  const check = document.querySelector("#options").value;

  for (let i = 0; i > check.length; i++) {
    console.log(i);
  }
  const projectSection = document.querySelector("#select-project").value

  return [ title, description, date, check ];
}