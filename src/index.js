// "use strict";

import { createTodo } from "./createTodo.js";
import { ToDo } from "./todo.js";
import { Project } from "./project.js";

const rebians = createTodo('Rebians', 'Hilous', '12-07-25', 'High');
console.log(rebians);
console.log(rebians.description)