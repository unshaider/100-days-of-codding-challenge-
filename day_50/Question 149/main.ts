// Question 149: Explain the concept of the event loop in JavaScript with an example.

console.log("Hello World");

setTimeout(() => {
  console.log("Hello from the callback");
}, 0);

console.log("Goodbye World");