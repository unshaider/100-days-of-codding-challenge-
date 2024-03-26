// 51. Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function area(width : number, height : number) : number {
    return width * height;
}

let arrow = (width: number, height: number): number => width * height;
console.log(arrow(8, 9));