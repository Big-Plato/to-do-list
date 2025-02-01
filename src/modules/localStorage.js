import { createProjectSection } from "./dom";
import { createTodoCard } from "./dom";

export function getLocalStorage(todo, project) {
  const todoKey = `todo_${todo.title}`; // Use a unique key for each todo
  localStorage.setItem(todoKey, JSON.stringify(todo));
  console.log(`Todo "${todo.title}" saved to localStorage.`);

  const projectKey = `project_${project}`; 
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
      console.log(project)
      projects.push(project);
    }
  }

  return { todos, projects };
}

export const { todos, projects } = retrieveFromLocalStorage();



