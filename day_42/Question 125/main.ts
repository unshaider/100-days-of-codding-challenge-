// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    printInfo: function () {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
};

car.printInfo();