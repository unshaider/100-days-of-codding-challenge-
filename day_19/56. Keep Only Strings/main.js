"use strict";
// 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
Object.defineProperty(exports, "__esModule", { value: true });
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];
let stringsArray = mixedArray.filter(item => typeof item === "string");
console.log(stringsArray);
