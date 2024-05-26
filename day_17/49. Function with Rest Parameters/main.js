"use strict";
// 49. Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
Object.defineProperty(exports, "__esModule", { value: true });
function myHobbies(...hobbies) {
    for (const hobby of hobbies) {
        console.log(`I enjoy ${hobby}.`);
    }
}
myHobbies("Codding", "Gyming", "Walking");
