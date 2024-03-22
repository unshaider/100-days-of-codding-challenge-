"use strict";
// 46. Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "Lenovo",
    model: "X250",
    year: 2015,
    describe: function () {
        console.log(`I have ${laptop.make} ${laptop.model} ${laptop.year}.`);
    }
};
laptop.describe();
