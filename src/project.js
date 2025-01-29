import { ToDo } from "./todo";

export class Project {
    constructor(name) {
        this.name = name;
    }

    get show () {
        return `${this.name}`;
    }
}