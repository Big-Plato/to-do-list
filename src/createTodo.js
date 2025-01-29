import { ToDo } from "./todo";

export function createTodo(title, description, dueDate, priority) {
    const todo = new ToDo(title, description, dueDate, priority);
    return todo;
}

