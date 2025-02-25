let student = {
  name: "თამარ",
  age: 21,
  faculty: "ინფორმატიკის ფაკულტეტი",
  course: 3,
  averageGrade: 8.5,
};

console.log(student);
console.log(student.name);
console.log(student["name"]);

console.log(
  `სტუდენტი ${student.name} არის ${student.age} წლის, სწავლობს ${student.faculty}-ში, არის ${student.course}-ე კურსზე და მისი საშუალო ქულაა ${student.averageGrade}.`
);

//for me :
//console.log - აბრუნებს შედეგს.
//name - აბრუნებს სტუდენტის სახელს.
//age - აბრუნებს სტუდენტის ასაკს.
//faculty - აბრუნებს სტუდენტის ფაკულტეტს.
//$ - აბრუნებს შედეგს.