// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
const person = {
    name: "John",
    getName: function () {
        return this.name;
    }
};
console.log(person.getName());
export {};
