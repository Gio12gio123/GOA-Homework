let arr1 = [1,2,3];
let arr2 = [4,5,6];

let combinedArr = arr1.concat(arr2);

combinedArr.copyWithin(1, 3, 5);

combiinedArr.fill(0, 3, 5);

let popLastElement = combinedArr.pop();

let shiftFirstElement = combinedArr.shift();

combinedArr.unshift(10,20)

// Challenge:

// Write a function called modifyArray that takes an array as input and performs all the above steps on it.

let modifyArray = modifyArray([1,2,3,4])

console.log(modifyArr)