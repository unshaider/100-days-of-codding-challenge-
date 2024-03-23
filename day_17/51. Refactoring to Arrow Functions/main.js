"use strict";
// 51. Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function area(width, height) {
    return width * height;
}
let arrow = (width, height) => width * height;
console.log(arrow(8, 9));
