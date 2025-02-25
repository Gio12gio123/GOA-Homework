// Task 1
// JavaScript Array Methods Task: Comprehensive Exercise

// Objective: To practice using the concat, copyWithin, fill, pop, shift, unshift, join, slice, and
//  splice array methods.

// Instructions:

// Create three arrays: arr1, arr2, and arr3 with the following elements:

// Concatenate arr1 and arr2 into a new array called mergedArray.

// Use the copyWithin method to copy the first three elements of mergedArray to the positions starting from 
// index 5.

// Use the fill method to replace elements from index 6 to the end with the number 0.

// Remove the last element from mergedArray using the pop method.

// Remove the first element from mergedArray using the shift method.

// Add the elements 100 and 200 to the beginning of mergedArray using the unshift method.

// Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements of arr3.

// 9, Use the slice method to create a new array slicedArray that contains the last five elements of mergedArray.

// Use the join method to create a string from slicedArray, with elements separated by a comma ,.


let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["one", "two", "three"];
let arr3 = [6, 7, 8, 9, 10];

let margedArr = arr1.concat(arr2);
margedArr.copyWithin(5, 0, 3);
margedArr.fill(0, 6);
margedArr.pop();
margedArr.shift();
margedArr.unshift(100,200)
margedArr.splice(2, 2, ...arr3);
let slicedArr = margedArr.slice(-5);
let joinedArr = slicedArr.join(",");


// ask 2:  Student Grades Management
// Objective: To manage student grades using various array methods.

// Instructions:

// Create an array called students and an array called grades with the following initial elements:

// Write a function called addStudent that takes a student name and grade as input, adds them to the 
// respective arrays using unshift, and returns the updated arrays.

// Write a function called removeLastStudent that uses pop to remove the last student and their grade 
// from the arrays and returns the updated arrays.

// Write a function called replaceGrade that uses splice to replace the grade of a student by their
//  index in the array and returns the updated grades array.

// Write a function called updateGrades that uses fill to update all grades to a specific value and returns the
//  updated grades array.


let students = ["giorgi", "nino", "mari"];
let grades = [90, 80, 70];

function addStudent(name, grade) {
  students.unshift(name);
  grades.unshift(grade);
  return grade;

}
console.log(addStudent("gio", 100));

function removeLastStudent() {
  students.pop();
  grades.pop();
  return grades;
}
console.log(removeLastStudent());

function replaceGrade(index, grade) {
  grades.splice(index, 1, grade);
  return grades;
}

console.log(replaceGrade(1, 100));

function updateGrades(grade) {
  grades.fill(grade);
  return grades;

}

console.log(updateGrades(100));

// Task 3: Playlist Management
// Objective: To manage a music playlist using various array methods.

// Instructions:

// Create an array called playlist with the following initial elements:

// Write a function called addSong that takes a song title as input, adds it to the beginning of the playlist 
// using unshift, and returns the updated playlist.

// Write a function called removeLastSong that uses pop to remove the last song from the playlist and returns 
// the updated playlist.

// Write a function called moveSongs that uses copyWithin to move the first two songs to the end of the playlist and returns the updated playlist.

// Write a function called combinePlaylists that takes a second playlist array as input, concatenates it with the current playlist using concat, and returns the combined playlist.

let playilist = ["yinuli", "Crabiee", "kendrick" ]

function addsong (newsong){
  playilist.unshift(newsong);
  return playilist;
}
console.log(addsong(tupac));

function removeLastSong (poped){
  playilist.pop();
  return playilist;
}

function moveSongs(){
  playilist.copyWithin(0,2);
  return playilist;
}

let playlist2 = ["song1", "song2", "song3"];

let combinePlaylists = playilist.concat(playlist2);

console.log(combinePlaylists);


// Task 4: Shopping Cart
// Objective: To manage a shopping cart using various array methods.

// Instructions:


// Create two arrays: cartItems and prices with the following initial elements:

// Write a function called addItem that takes an item and its price as input, adds them to the respective a
// rrays using unshift, and returns the updated arrays.

// Write a function called removeFirstItem that uses shift to remove the first item and its price from 
// the arrays and returns the updated arrays.

// Write a function called replaceItem that uses splice to replace an item and its price by their index 
// in the arrays and returns the updated arrays.

// Write a function called createReceipt that uses join to create a string from cartItems with each item 
// separated by a comma and returns the receipt string.

// Write a function called applyDiscount that uses fill to update all prices to a specified discount price
//  and returns the updated prices array.

let cartItems = ["apple", "banana", "cherry"];

let prices = [1, 2, 3];

function addItem(item, price){
  cartItems.unshift(item);
  prices.unshift(price);
  return cartItems;
}

console.log(addItem("orange", 4));

function removeFirstItem(){
  cartItems.shift();
  prices.shift();
  return cartItems;
}

console.log(removeFirstItem());


function replaceItem(index, item, price){
  cartItems.splice(index, 1, item);
  prices.splice(index, 1, price);
  return cartItems;
}

console.log(replaceItem(1, "grape", 5));


function createReceipt(){
  let receipt = cartItems.join(",");
  return receipt;
}

console.log(createReceipt());


function applyDiscount(discount){
  prices.fill(discount);
  return prices;
}

console.log(applyDiscount(2));


// Task 5: Library Management System
// Objective: To manage a library system using arrays and objects, and to practice various array methods including push.

// Instructions:

// Create an array called library with the following initial book objects:

// Write a function called addBook that takes a book object as input and adds it to the library array using the push method. The function should return the updated library array.

// Write a function called removeLastBook that uses the pop method to remove the last book from the library array and returns the updated library array.

// Write a function called updateBookCopies that takes a book title and a number of copies as input, and uses the splice method to update the copies of the specified book. The function should return the updated library array.

// Write a function called listBooks that uses the join method to create a string of all book titles separated by commas and returns the string.

// Write a function called extractBooks that uses the slice method to create a new array containing a portion of the library array (e.g., the first two books) and returns the new array.

// Write a function called modifyBooks that uses the copyWithin method to copy the first book in the library array to the last position and returns the updated library array.

// Write a function called resetCopies that uses the fill method to set the copies of all books in the library array to a specified number and returns the updated library array.

// Write a function called removeFirstBook that uses the shift method to remove the first book from the library array and returns the updated library array.

// 10 . Write a function called addFirstBook that takes a book object as input and uses the unshift method to add it to the beginning of the library array. The function should return the updated library array.


let library = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", copies: 3 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", copies: 2 },
  { title: "1984", author: "George Orwell", copies: 5 }
];

function addBook(book){
  library.push(book);
  return library;
}

console.log(addBook({title: "The Great Gatsby", author: "F. Scott Fitzgerald", copies: 4}));

function removeLastBook(){
  library.pop();
  return library;
}

console.log(removeLastBook());

function updateBookCopies(title, copies){
  library.forEach(book => {
    if(book.title === title){
      book.copies = copies;
    }
  });
  return library;
}


console.log(updateBookCopies("1984", 10));


function listBooks(){
  let bookTitles = library.map(book => book.title);
  return bookTitles.join(",");
}

console.log(listBooks());

function extractBooks(){
  let firstTwoBooks = library.slice(0, 2);
  return firstTwoBooks;
}

console.log(extractBooks());


function modifyBooks(){
  library.copyWithin(library.length - 1, 0, 1);
  return library;
}

console.log(modifyBooks());

function resetCopies(copies){
  library.forEach(book => book.copies = copies);
  return library;
}

console.log(resetCopies(1));

function removeFirstBook(){
  library.shift();
  return library;
}

console.log(removeFirstBook());

function addFirstBook(book){
  library.unshift(book);
  return library;
}

console.log(addFirstBook({title: "TheOdyssey", author: "Homer", copies: 3}));

// for me :

// concat - joins two or more arrays, and returns a copy of the joined arrays
// copyWithin - copies array elements within the array, to and from specified positions
// fill - fills all the elements of an array from a start index to an end index with a static value
// pop - removes the last element of an array, and returns that element
// shift - removes the first element of an array, and returns that element
// unshift - adds one or more elements to the beginning of an array, and returns the new length of the array
// splice - adds or removes elements from an array
// slice - extracts a section of an array and returns a new array
// join - joins all elements of an array into a string
// push - adds one or more elements to the end of an array, and returns the new length of the array
// forEach - calls a function for each element in an array
// map - creates a new array with the results of calling a function for every array element
// filter - creates a new array with array elements that pass a test
// reduce - reduces the array to a single value
// sort - sorts the elements of an array
// reverse - reverses the order of the elements in an array
// find - returns the first element in an array that passes a test
// findIndex - returns the index of the first element in an array that passes a test
// some - checks if any of the elements in an array pass a test
// every - checks if all the elements in an array pass a test
