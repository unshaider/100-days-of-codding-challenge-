"use strict";
// 92. Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
function removeLastElement(arr) {
    return arr.pop();
}
const fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits));
console.log(fruits);
