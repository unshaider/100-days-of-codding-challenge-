// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
export class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
