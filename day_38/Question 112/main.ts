// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

let countries: Map<string, string> = new Map<string, string>();
countries.set("Pakistan", "Islamabad");
countries.set("India", "New Delhi");
countries.set("Bangladesh", "Dhaka");

console.log(countries);