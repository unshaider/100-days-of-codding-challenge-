// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function invokeCallback(callback, ...args) {
    callback(...args);
}
invokeCallback(console.log, 1, 2, 3);
export {};
