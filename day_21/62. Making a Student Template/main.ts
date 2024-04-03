// 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
    name: string;
    age: number;
    courses: string[];
}

let student: Student = {
    name: "Alice",
    age: 22,
    courses: ["Math", "Science", "History"]
};

console.log(student);