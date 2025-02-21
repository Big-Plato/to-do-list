import { createProjectSection } from "./dom";
import { createTodoCard } from "./dom";

export function getLocalStorage(todo) {
  // Store the todo object with a unique key
  const todoKey = `todo_${todo.title}`; // Use a unique key for each todo
  localStorage.setItem(todoKey, JSON.stringify(todo));
  // Cretes default section
  localStorage.setItem("project_Default", "Default")
  // Store the project name
  const projectKey = `project_${todo.project}`; // Use a unique key for each project
  localStorage.setItem(projectKey, todo.project);
}

export function retrieveFromLocalStorage() {
  let todos = [];
  let projects = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("todo_")) {
      const todoString = localStorage.getItem(key);
      const todo = JSON.parse(todoString);
      todos.push(todo);
    }

    if (key.startsWith("project_")) {
      const project = localStorage.getItem(key);
      projects.push(project);
    }
  }

  // Remove duplicates from the array
  const noDuplicate = Array.from(new Set(projects));
  const noDuplicateTodo = Array.from(new Set(todos));

  noDuplicate.push("Default");
  noDuplicate.push("Completed");
  // Iterate over the projects to create them in the DOM
  for (let i = 0; i < noDuplicate.length; i++) {
    createProjectSection(noDuplicate[i]);
  }

  // Iterate over the todos to create them based on the current pro
  function createReturnTodo(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Sees if property project of todo exists in projects array, if not, create todo in default section
      console.log("Projeto: ", arr[i].project)
      console.log("Array Todo: ", arr[i])
      if (noDuplicate.includes(arr[i].project)) {
        createTodoCard(arr[i], arr[i].project);
      } else {
        createTodoCard(arr[i], "Default");
      }
    }
  }

  createReturnTodo(noDuplicateTodo);

  return { todos, projects };
}
