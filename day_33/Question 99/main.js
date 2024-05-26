"use strict";
// 99. Generate a date object representing your next birthday and log it to the console.
Object.defineProperty(exports, "__esModule", { value: true });
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(8, 3);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
