let numbers: number[] = [1, 2, 3, 4];

console.log(numbers);

numbers = numbers.map((el) => el * 2);

console.log(numbers);

type Student = { age: number; name: string };

let students: Student[] = [
  { age: 25, name: "Alice" },
  { age: 26, name: "Bob" },
  { age: 27, name: "Cedric" },
  { age: 28, name: "Damien" },
  { age: 29, name: "Eleonore" },
];

// const index = students.findIndex((student) => student.name === "Damien");

// students[index].age = 30;

students.forEach((student) => {
  if (student.name === "Damien") {
    student.age = 30;
  }
  console.log(student);
});

// console.log(students);
