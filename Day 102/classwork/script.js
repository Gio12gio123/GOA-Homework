let Value = [
  25,
  "Mikheil",
  72.5,
  true,
  {
    firstName: "Mikheil",
    lastName: "Gorgadze",
    age: 30,
    country: "Georgia",
    city: "Tbilisi",
  },
];

let person = Value[4];

let sentence = `My name is ${person.firstName}, my last name is ${person.lastName}, I am ${person.age} years old, I live in ${person.country}, ${person.city}.`;

console.log(sentence);
