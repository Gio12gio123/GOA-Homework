// Task 1: Working with Strings and Numbers
let numsArray = [1, 2, 3, 4, 5];
let strArray = ["one", "two", "three"];

let combinedArray = numsArray.concat(strArray);

combinedArray.copyWithin(4, 0, 3);
combinedArray.fill("filled", 2, 4);

combinedArray.pop();
combinedArray.shift();

combinedArray.unshift(100, 200);

// Task 1 Challenge Function
function modifyArray(array) {
  let combinedArray = array.concat(["one", "two", "three"]);
  combinedArray.copyWithin(4, 0, 3);
  combinedArray.fill("filled", 2, 4);
  combinedArray.pop();
  combinedArray.shift();
  combinedArray.unshift(100, 200);
  return combinedArray;
}

console.log(modifyArray([1, 2, 3, 4, 5]));

// Task 2: Array of Objects
let people = [{ name: "John" }, { name: "Jane" }];
let places = [{ city: "London" }, { city: "Paris" }];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0, 2);
mergedArray.fill({ city: "New York" }, mergedArray.length - 2);

mergedArray.pop();
mergedArray.shift();

mergedArray.unshift({ name: "Charlie" }, { name: "David" });

console.log(mergedArray);

// Task 3: Working with Mixed Data Types
let mixedArray = [1, "two", 3, "four", 5, true, false];
let extendedArray = mixedArray.concat([true, false]);

extendedArray.copyWithin(0, 3, 5);
extendedArray.fill(0, 4, 7);

extendedArray.pop();
extendedArray.shift();

extendedArray.unshift(null, undefined);

console.log(extendedArray);

