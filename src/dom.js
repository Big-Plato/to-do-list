import { todoSection, projectInterval } from "./index";
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

//Create a project, that is a ul, that is appended to todoSection
export function createProjectSection(projectname) {
  const project = new Project(projectname);
  const ul = document.createElement("ul");
  ul.classList.add(`${projectname}`);
  ul.classList.add('project');
  todoSection.appendChild(ul);
  ul.textContent = `${project.name}`;
  projectInterval(projectname);
  return project;  
}

function selectProjectSection(projectname) {
    const projectSection = document.querySelector(`.${projectname}`);
    return projectSection;
}

//Modals
//Todo modal
addTodo.addEventListener("click", () => {
  dialog.showModal();
});

//Project modal
addProject.addEventListener("click", () => {
  dialog2.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

closeDialogBtn2.addEventListener("click", () => {
  dialog2.close();
})

//to-do submit form button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  manipulateInputData();
  document.querySelector("#select-project");
});

submitBtnProject.addEventListener("click", (e) => {
  e.preventDefault();
  const projectName = submitProject();
  createProjectSection(projectName);
})

//Function to manipulate and extract data from the to-do form
export function manipulateInputData () {
  const todoForm = document.querySelector("#todo-form");
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const date = todoForm.date.value;
  const priority = selectRadioBtn();
  const select = todoForm.select.value;
  console.log(select);  

  const arr = [title, description, date, priority, select];
  console.log(arr);

  const todo = new Todo(arr[0], arr[1], arr[2], arr[3]);
  console.log(todo)
  const project = select;
  console.log(project);

  createTodoCard(todo, project);
}

//Select the radio buttons that indicates a priority of the todo
function selectRadioBtn () {
  const radio = document.getElementsByName("option");
  let radioValue;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radioValue = radio[i].value;
    }
    console.log(radioValue);
  }
  return radioValue;
}

function submitProject () {
  const name = document.querySelector("#project-name").value;
   return name;
}

