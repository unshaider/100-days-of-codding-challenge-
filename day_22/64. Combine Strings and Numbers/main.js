"use strict";
// 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
Object.defineProperty(exports, "__esModule", { value: true });
function combineStringAndNumber(text, number) {
    return text + number;
}
console.log(combineStringAndNumber("Age: ", 30));
