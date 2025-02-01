export class Project {
  constructor(name) {
    this.name = name;
  }

  get show() {
    return `${this.name}`;
  }
}
