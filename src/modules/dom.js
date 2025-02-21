import { todoSection, projectInterval } from "../index";
import { Todo } from "./todo";
import { getLocalStorage } from "./localStorage";
import { sendToCompleted } from "./finishTodo";

const addTodo = document.querySelector(".todo-add");
const addProject = document.querySelector(".project-add");
const dialog = document.querySelector("#dialog-todo");
const dialog2 = document.querySelector("#dialog-project");
const closeDialogBtn = document.querySelector("#close");
const closeDialogBtn2 = document.querySelector("#close-project");
const submitBtn = document.querySelector("#submit");
const submitBtnProject = document.querySelector("#submit-project");
const todoForm = document.querySelector("#todo-form");

export function createTodoCard(todo, project) {
  console.log(todo)
  //Select the proper section of the project you want to add a todo, and then adds
  //a todo
  const selectProject = document.querySelector(`.${project}`);
  const todoItem = document.createElement("li");
  todoItem.classList.add("card");
  selectProject.appendChild(todoItem);

  const inputCheck = document.createElement("input");
  inputCheck.classList.add("mark-todo");

  //Check to finish a todo

  inputCheck.setAttribute("type", "checkbox");
  const paraTitle = document.createElement("p");
  const divTitle = document.createElement("div");
  divTitle.classList.add("divTitle");
  divTitle.appendChild(inputCheck);
  divTitle.appendChild(paraTitle);

  const paraDescription = document.createElement("p");
  paraDescription.classList.add("todoDescription");
  const paraDate = document.createElement("p");
  const paraPriority = document.createElement("p");
  const divDatePriority = document.createElement("div");
  divDatePriority.appendChild(paraDate);
  divDatePriority.appendChild(paraPriority);
  divDatePriority.classList.add("divDatePriority");

  // Handles textContent of an element
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
  todoItem.setAttribute("contenteditable", "plaintext-only");

  let isVisible = false;

  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("show");

    if (!isVisible) {
      paraDescription.style.cssText = "overflow: visible;";
      isVisible = true;
    } else {
      paraDescription.style.cssText = "overflow: hidden;";
      isVisible = false;
    }
  });

  const button = document.createElement("button");
  button.textContent = "Delete";
  todoItem.append(button);
  button.classList.add("delete-btn");

  button.addEventListener("click", () => {
    if (confirm(`Do you really want to remove ${todo.title}?`)) {
      todoItem.remove();
      localStorage.removeItem(`todo_${todo.title}`);
    }
  });

  colorPriority(todoItem, todo.priority);
  getLocalStorage(todo, todo.project);

  const checkDone = sendToCompleted(todoItem, todo);

  inputCheck.addEventListener("click", () => {
    if (inputCheck.checked) {
      checkDone.send(todoItem);
      todoItem.style.cssText =
        "text-decoration: line-through; background-color: black; height: auto" ;
        getLocalStorage(todo, "Completed");
      } else {
      checkDone.retrieve(todoItem);
      todoItem.style.cssText = "text-decoration: none;";
      colorPriority(todoItem, todo.priority);
    }
  });
}

// Delete the project of DOM and localStorage
const deleteProject = (project) => {
  const projectHasChild = document.querySelector(`.${project}`);
  for (let i = 0; i < projectHasChild.length; i++) {
  }
  if (confirm(`Do you really want to remove ${project}?`)) {
    document.querySelector(`.${project}`).remove();
    localStorage.removeItem(`project_${project}`);
  }
  window.location.reload();
};

//Create a project, that is a ul, that is appended to todoSection
export function createProjectSection(projectname) {
  const existingProject = document.querySelector(`.${projectname}`);
  if (existingProject) {
    console.log(`Project '${projectname}' already exists.`);
    return existingProject;
  }

  const project = projectname;
  const ul = document.createElement("ul");
  ul.classList.add(`${projectname}`);
  ul.classList.add("project");
  todoSection.appendChild(ul);
  ul.textContent = `${project}`;
  projectInterval(projectname);

  const button = document.createElement("button");
  button.textContent = `Delete
  Project`;
  button.classList.add("delete-btn");
  button.style.cssText = "width: 200px;";
  button.addEventListener("click", () => {
    deleteProject(project);
  });
  ul.append(button);
  return project;
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
});

//to-do submit form button
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  manipulateInputData();
  dialog.close();
  todoForm.reset(); //erase the fields of the form after the submit button is clicked
});

//project submit button
submitBtnProject.addEventListener("click", (e) => {
  e.preventDefault();
  const projectName = submitProject();
  createProjectSection(projectName);
});

//Function to manipulate and extract data from the to-do form
export function manipulateInputData() {
  const title = todoForm.title.value;
  const description = todoForm.description.value;
  const date = todoForm.date.value;
  const priority = selectRadioBtn();
  const select = todoForm.select.value;

  const arr = [title, description, date, priority, select];

  const todo = new Todo(arr[0], arr[1], arr[2], arr[3], arr[4]);
  createTodoCard(todo, todo.project);
}

//Select the radio buttons that indicates a priority of the todo
function selectRadioBtn() {
  const radio = document.getElementsByName("option");
  let radioValue;
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radioValue = radio[i].value;
    }
  }
  return radioValue;
}

function submitProject() {
  const name = document.querySelector("#project-name").value;
  return name;
}

// Change the color of priority
function colorPriority(todo, priority) {
  if (priority === "High") {
    todo.style.cssText = "background-color: rgb(206, 64, 64);";
  } else if (priority === "Medium") {
    todo.style.cssText = "background-color: rgb(248, 203, 68);";
  } else if (priority === "Low") {
    todo.style.cssText = "background-color: rgb(72, 185, 38);";
  }
}
