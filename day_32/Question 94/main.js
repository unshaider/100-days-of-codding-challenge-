"use strict";
// 94. Use the .map() method to create a new array that contains the length of each word from an array of words.
Object.defineProperty(exports, "__esModule", { value: true });
const words = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths = words.map(word => word.length);
console.log(lengths);
