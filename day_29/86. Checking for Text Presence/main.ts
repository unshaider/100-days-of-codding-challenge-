// 86. Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript");
}

console.log(hasJavaScript("I love coding in JavaScript!"));