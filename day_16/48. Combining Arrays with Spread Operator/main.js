"use strict";
// 48. Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop1 = [34000, 25000, 120000];
let laptop2 = [350000, 55000, 10000];
let sortedLaptops = [...laptop1, ...laptop2].sort((a, b) => a - b);
console.log(sortedLaptops);
