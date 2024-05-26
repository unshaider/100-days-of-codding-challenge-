"use strict";
// 90. Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
Object.defineProperty(exports, "__esModule", { value: true });
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("hello"));
console.log(isValueNaN(123));
