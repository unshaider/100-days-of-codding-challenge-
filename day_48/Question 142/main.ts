// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

let promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

promise.then((value) => {
    console.log(value);
});
