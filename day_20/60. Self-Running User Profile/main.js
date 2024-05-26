"use strict";
// 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
Object.defineProperty(exports, "__esModule", { value: true });
let userProfile = (function () {
    let name = "John";
    let age = 30;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userProfile.displayInfo();
