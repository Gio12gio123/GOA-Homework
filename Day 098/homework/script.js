function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
  this.introduce = function () {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`
    );
  };
}

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
}

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.changePassword = function (newPassword) {
    this.password = newPassword;
  };
  this.getDetails = function () {
    return `Username: ${this.username}, Email: ${this.email}`;
  };
}

const person1 = new Person("John", 30, "Software Developer");
person1.introduce();

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

const user1 = new User("john_doe", "john@example.com", "password123");
const user2 = new User("jane_doe", "jane@example.com", "mypassword");

user1.changePassword("newpassword456");

console.log(user1.getDetails());
console.log(user2.getDetails());


// for me :
// function - ფუნქციას შექმნის.
// this - აბრუნებს მითითებულ ობიექტს.
// new - შექმნის ახალ ინსტანციას.
// return - აბრუნებს შედეგს.
// console.log - აბრუნებს შედეგს.
// . - აბრუნებს შედეგს.
// , - აბრუნებს შედეგს.
// () - აბრუნებს შედეგს.
// {} - აბრუნებს შედეგს.