import { Person } from "./person.js";
export class Student extends Person {
  constructor(firstname, lastname, age, grade) {
    super(firstname, lastname, age);
    this.grade = grade;
  }
}
