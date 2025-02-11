class User {
  constructor(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

const user1 = new User1(
  "gio",
  "izoria",
  "9876543",
  "gnkjsnlk@gmail.com",
  "mypassword1",
  "mypassword1"
);
const user2 = new User2(
  "gela",
  "geliashvili",
  "1231231",
  "gelas@gmail.com",
  "mypassword2",
  "mypassword2"
);
const user3 = new User3(
  "gia",
  "maisuradze",
  "4564564",
  "n@gmail.com",
  "mypassword3",
  "mypassword3"
);

console.log(
  `My name is ${user1.name} my last name is ${user1.lastName}, my phone number is ${user1.phoneNumber} and my email is ${user1.email}.`
);
console.log(
  `My name is ${user2.name} my last name is ${user2.lastName}, my phone number is ${user2.phoneNumber} and m email is ${user2.email}.`
);
console.log(
  `My name is ${user3.name} my last name is ${user3.lastName}, my phone number  ${user3.phoneNumber} and my email is ${user3.email}.`
);

console.log(user1);
console.log(user2);
console.log(user3);
