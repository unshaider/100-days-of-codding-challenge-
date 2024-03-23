// 49. Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function myHobbies(...hobbies: string[]) {
  for (const hobby of hobbies) {
    console.log(`I enjoy ${hobby}.`);
  }
}

myHobbies("Codding", "Gyming", "Walking");