"use strict";
// 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
