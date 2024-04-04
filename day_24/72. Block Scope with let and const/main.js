"use strict";
// 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
