let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let nestedArray = [1, [2, 3], [4, [5, 6]]];

let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(5, 0, 3);

combinedArray.fill(0, 6);

let poppedElement = combinedArray.pop();

let shiftedElement = combinedArray.shift();

combinedArray.unshift(100, 200);

combinedArray.splice(2, 2, "x", "y", "z");

let slicedArray = combinedArray.slice(-5);

let joinedString = slicedArray.join(",");

let flatArray = nestedArray.flat(2);

let isIncluded = flatArray.includes(8);

let index = flatArray.indexOf(9);

let lastIndex = flatArray.lastIndexOf(7);

let numbers = [10, 20, 30, 40, 50];
let secondArray = [60, 70, 80];
let concatenatedNumbers = numbers.concat(secondArray);

numbers.copyWithin(3, 1, 3);

numbers.fill(100, 0, 3);

let poppedNum = numbers.pop();

let shiftedNum = numbers.shift();

numbers.unshift(5, 15);

let joinedNumbers = numbers.join("-");

let slicedNumbers = numbers.slice(1, 4);

numbers.splice(1, 2, 200, 300);

let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArr = nestedArr.flat(2);

let contains50 = numbers.includes(50);

let index30 = numbers.indexOf(30);

let lastIndex20 = numbers.lastIndexOf(20);

numbers.push(90, 100);
