let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

let slicedfruits = fruits.slice(1, 3)
console.log(slicedfruits);

let splicedfruits = fruits.splice(3, 4 , "fig")

console.log(splicedfruits);

let joinedfruits = fruits.join(" - ")

console.log(joinedfruits);

// Challenge:

//  - Write a function called processFruits that takes an array of fruits as input, performs the above steps on
//   it, and returns the resulting string.

function processFruits(fruits) {
  let slicedfruits = fruits.slice(1, 2)
  let splicedfruits = fruits.splice(3, 4 , "fig")
  let joinedfruits = fruits.join(" - ")
  return joinedfruits;
}

console.log(processFruits(["apple", "banana", "cherry", "date", "elderberry"]));