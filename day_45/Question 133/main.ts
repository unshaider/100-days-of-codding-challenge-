// Question 133: Write a JavaScript object and convert it into a JSON string.

let person = {
    name: "Uns",
    age: 20,
    city: "New York"
};

let json = JSON.stringify(person);

console.log(json);