"use strict";

import "./styles.css";
import { retrieveFromLocalStorage } from "./modules/localStorage.js";
import {
  completeSection,
  completed,
} from "./modules/finishTodo.js";

const home = document.querySelector(".home");

document.addEventListener("DOMContentLoaded", () => {
  retrieveFromLocalStorage();
});

export const todoSection = document.querySelector(".todo-section");

export function projectInterval(projectname) {
  const select = document.querySelector("#select-project");
  const option = document.createElement("option");
  option.textContent = projectname;
  select.appendChild(option);
}

home.addEventListener("click", () => {
  if ((todoSection.innerHTML = "Completed")) {
    todoSection.innerHTML = "";
    retrieveFromLocalStorage();
  } else {
    console.log("nothing");
  }
});
