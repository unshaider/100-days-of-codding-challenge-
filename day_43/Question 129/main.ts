// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

console.log("Traditional function:")
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));

console.log("Arrow function:");
const addArrow = (a: number, b: number): number => a + b;
console.log(addArrow(1, 2));

console.log("Arrow functions do not have their own 'this' keyword.")