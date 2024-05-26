// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function findVowel(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            return str[i];
        }
    }
}
console.log(findVowel("Pakistan"));
export {};
