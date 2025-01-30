export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    showTodo () {
        return `
Title: ${this.title}
Description: ${this.description}
Date: ${this.dueDate}
Priority: ${this.priority}
        `
    }

}