import { createProjectSection } from "./dom";
import { createTodoCard } from "./dom";

export function getLocalStorage(todo, project) {
  // Store the todo object with a unique key
  const todoKey = `todo_${todo.title}`; // Use a unique key for each todo
  localStorage.setItem(todoKey, JSON.stringify(todo));
  console.log(`Todo "${todo.title}" saved to localStorage.`);

  // Store the project name
  const projectKey = `project_${project}`; // Use a unique key for each project
  localStorage.setItem(projectKey, project);
  console.log(`Project "${project}" saved to localStorage.`);
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

  // Iterate over the projects to create them in the DOM
//   function createReturnProject(arr) {
    for (let i = 0; i < noDuplicate.length; i++) {
      createProjectSection(noDuplicate[i]);
    }
//     return arr;
//   }

  // Iterate over the todos to create them based on the current pro
  function createReturnTodo(arr) {
    for (let i = 0; i < arr.length; i++) {
      createTodoCard(arr[i], arr[i].project);
    }
  }

//   createReturnProject(noDuplicate);
  createReturnTodo(noDuplicateTodo);

  return { todos, projects };
}

// Função de pegar data funcionará em dois lugares
//1 - Create Card
//2- Create project
