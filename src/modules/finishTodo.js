import { todoSection } from "../index";

export const completed = document.querySelector(".finish");

export function completeSection() {
  todoSection.innerHTML = "";
  const project = document.createElement("div");
  project.classList.add("project");
  project.textContent = "Completed";
  todoSection.appendChild(project);
}
