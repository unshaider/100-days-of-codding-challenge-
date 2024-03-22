"use strict";
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
    { make: 'Apple', model: 'Macbook', year: 2020 },
    { make: 'Dell', model: 'Latitude', year: 2019 },
    { make: 'HP', model: 'Probook', year: 2016 },
];
let [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop);
console.log(secondLaptop);
