// Question 127: Convert a traditional function expression to an arrow function.

let add = function (a: number, b: number): number {
    return a + b;
}

let addArrow = (a: number, b: number): number => a + b;

console.log(add(1, 2));