// 94. Use the .map() method to create a new array that contains the length of each word from an array of words.

const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths: number[] = words.map(word => word.length);

console.log(lengths);