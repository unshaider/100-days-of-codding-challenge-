// 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAdder(valueToAdd: number): (arg0: number) => number {
    return function(number: number): number {
        return number + valueToAdd;
    };
}

let addFive = makeAdder(5);
console.log(addFive(10));