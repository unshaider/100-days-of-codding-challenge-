// Question 134: Take a JSON string and parse it into a JavaScript object.

let jsonString = '{"name": "Kumail", "age": 25}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);