let myname = "gio";
let myemail = "io@gmail.com";
const mypassword = "******";
console.log("My name is: " + myname);


// // what do we use let in JS
// In JavaScript, the let keyword is used to declare variables that can be reassigned new values. Unlike var, let has block scope, which means the variable is only accessible within the block (e.g., inside a loop or an if statement) in which it is declared. This helps prevent issues related to variable hoisting and provides better control over variable accessibility and lifespan. Here's an example:

//JavaScript, the const keyword is used to declare variables that cannot be reassigned after their initial assignment. This means that once you assign a value to a const variable, you cannot change that value. However, it is important to note that const variables are not completely immutable; if the value assigned to a const variable is an object or array, you can still modify the properties or elements of that object or array.

// //Reassignment:

// let: Variables declared with let can be reassigned new values.

// javascript
// let a = 10;
// a = 20; // This is allowed
// const: Variables declared with const cannot be reassigned after their initial value.

// javascript
// const b = 10;
// b = 20; // This will cause an error