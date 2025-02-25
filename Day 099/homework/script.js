let student = {
  name: "John Doe",
  age: 20,
  grade: "B",
  isEnrolled: true,
  getInfo: function () {
    return `Student: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Enrolled: ${this.isEnrolled}`;
  },
};

console.log(student.getInfo());

student.grade = "A";

console.log(student);

let library = {
  name: "City Library",
  location: "Main Street",
  books: {
    book1: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    book2: {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    book3: {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  },
  listBooks: function () {
    for (let key in this.books) {
      let book = this.books[key];
      console.log(
        `This book is titled "${book.title}" by ${book.author}, published in ${book.year}.`
      );
    }
  },
};

library.listBooks();

let product1 = {
  productName: "Laptop",
  price: 1000,
  quantity: 10,
  isAvailable: true,
};

let product2 = {
  productName: "Headphones",
  price: 50,
  quantity: 0,
  isAvailable: false,
};

let product3 = {
  productName: "Smartphone",
  price: 500,
  quantity: 5,
  isAvailable: true,
};

let inventory = {
  product1: product1,
  product2: product2,
  product3: product3,
  displayAvailableProducts: function () {
    if (this.product1.isAvailable && this.product1.quantity > 0) {
      console.log(
        `Product: ${this.product1.productName}, Price: $${this.product1.price}, Quantity: ${this.product1.quantity}`
      );
    }
    if (this.product2.isAvailable && this.product2.quantity > 0) {
      console.log(
        `Product: ${this.product2.productName}, Price: $${this.product2.price}, Quantity: ${this.product2.quantity}`
      );
    }
    if (this.product3.isAvailable && this.product3.quantity > 0) {
      console.log(
        `Product: ${this.product3.productName}, Price: $${this.product3.price}, Quantity: ${this.product3.quantity}`
      );
    }
  },
};

inventory.displayAvailableProducts();

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getCarInfo = function () {
    return `${this.year} ${this.brand} ${this.model}`;
  };
}

let car1 = new Car("Toyota", "Corolla", 2021);
let car2 = new Car("Honda", "Civic", 2020);
let car3 = new Car("Ford", "Mustang", 2022);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());


//for me :
//object - აბრუნებს ობიექტს.
//function - აბრუნებს ფუნქციას.
//this - აბრუნებს ეს.
//console.log - აბრუნებს შედეგს.
//new - აბრუნებს ახალ ელემენტს.
//prototype - აბრუნებს პროტოტიპს.
//let - აბრუნებს ცვლადს.
//for - ციკლის შექმნა.
//in - აბრუნებს შედეგს.
//for in - ციკლის შექმნა.
//for of - ციკლის შექმნა.
//continue - გადაადგილებს ციკლს.
