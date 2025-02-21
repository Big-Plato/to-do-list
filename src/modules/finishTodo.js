import { todoSection } from "../index";

export const completed = document.querySelector(".finish");

export function completeSection() {
  const project = document.createElement("div");
  project.classList.add("project");
  project.textContent = "Completed";
  todoSection.appendChild(project);
}

export const sendToCompleted = (todoItem, todo) => {
  const todoProject = todo.project;

  const send = (todoDiv) => {
    const completed = document.querySelector(".Completed");
    completed.appendChild(todoDiv);
  }

  const retrieve = (todoDiv) => {
    const retrieved = document.querySelector(`.${todoProject}`);
    console.log(retrieved)
    retrieved.appendChild(todoDiv);
  }
  
  return { send, retrieve }
} 