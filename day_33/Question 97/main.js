"use strict";
// 97. Write a function that returns the current date in the format "DD-MM-YYYY".
Object.defineProperty(exports, "__esModule", { value: true });
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(getCurrentDateFormatted());
