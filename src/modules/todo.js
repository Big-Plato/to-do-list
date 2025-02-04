export class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;

    }

    showTodo () {
        return `
Title: ${this.title}
Description: ${this.description}
Date: ${this.dueDate}
Priority: ${this.priority}
        `
    }

    set props (project) {
        this.project = project;
        return project;
    }

}