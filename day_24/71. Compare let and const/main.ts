// 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let age = 25;
age = 26;
console.log(age);

const $name = "Alice";
try {
    $name = "Bob";
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
}