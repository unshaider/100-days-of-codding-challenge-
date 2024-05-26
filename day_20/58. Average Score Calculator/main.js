"use strict";
// 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
Object.defineProperty(exports, "__esModule", { value: true });
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(80, 90, 100, 70));
