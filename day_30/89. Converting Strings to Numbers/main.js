"use strict";
// 89. Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
Object.defineProperty(exports, "__esModule", { value: true });
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("98"));
