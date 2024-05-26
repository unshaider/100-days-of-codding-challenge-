"use strict";
// 86. Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
Object.defineProperty(exports, "__esModule", { value: true });
function hasJavaScript(str) {
    return str.includes("JavaScript");
}
console.log(hasJavaScript("I love coding in JavaScript!"));
