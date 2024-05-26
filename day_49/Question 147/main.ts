// Question 147: Explain how to handle errors in a callback pattern.

function handleError(error: Error) {
    console.log(error.message);
}

function doSomethingAsync(callback: (error: Error) => void) {
    setTimeout(() => {
        callback(new Error("Something went wrong!"));
    }, 1000);
}

doSomethingAsync(handleError);
