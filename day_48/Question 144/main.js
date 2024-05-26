// Question 144: Explain the use of the Promise.all() method with an example.
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("World");
    }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("TypeScript");
    }, 3000);
});
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("JavaScript");
    }, 4000);
});
Promise.all([promise1, promise2, promise3, promise4]).then(values => {
    console.log(values);
});
export {};
