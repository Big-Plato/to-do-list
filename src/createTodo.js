import { Todo } from "./todo.js";

export function createTodo (title, description, dueDate, priority) {
    const todo = new Todo(title, description, dueDate, priority)
    return todo;
}