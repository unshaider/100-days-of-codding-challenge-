// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
let students = new Map();
students.set(1, "Kumail");
students.set(2, "Dawood");
students.set(3, "Hammad");
students.set(4, "Bilal");
for (let [key, value] of students) {
    console.log(`${key} : ${value}`);
}
export {};
