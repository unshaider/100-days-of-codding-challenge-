// Question 135: Explain how you can format a JSON string with proper indentation for readability.
const jsonString = JSON.stringify({
    "name": "Uns",
    "age": 20,
    "hobbies": ["Codding", "Gyming", "Walking"]
}, null, 2);
console.log(jsonString);
export {};
