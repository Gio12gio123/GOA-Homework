// Description: Write a function that takes an array as an argument and returns the number of elements in that array

function countElements(arr) {
  return arr.length;
}
console.log(countElements([1, 2, 3, 4, 5])); 

//Description: Write a function that takes two arrays as arguments and returns a new array that is the result of concatenating the two arrays.

function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);

}

console.log(concatArrays([1, 2, 3], [4, 5, 6]));

// Description: Write a function that takes an array and a value as arguments and adds the value to the end of 
// the array using the push() method. The function should return the new length of the array.

function addValue(arr, value){
  arr.push(value);
  return arr.length;
}

console.log(addValue([1, 2, 3, 4, 5], 6));

// Description: Write a function that takes an array as an argument and removes the last element from the 
// array using the pop() method. The function should return the removed element.

function removeLastElement(arr){
  return arr.pop();

}

console.log(removeLastElement([1, 2, 3, 4, 5]));

//Description: Write a function that takes two arrays as arguments, concatenates them, and then pushes a new value to the end 
// of the concatenated array. The function should return the new array

function concatAndPush(arr1, arr2, value){
  let newArr = arr1.contact(arr2);
  newArr.push(value);
  return newArr;
}

console.log(concatAndPush([1, 2, 3], [4, 5, 6], 7));

//Description: Write a function that takes an array as an argument and creates a new array containing only the even-indexed 
// elements of the original array using a for loop.

function evenIndexedElements(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i += 2){
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(evenIndexedElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//Description: Write a function that takes an array of strings and returns a new array with each string's length using a 
// for loop and the push() method.

function stringLengths(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].length);
  }
  return newArr;
}

console.log(stringLengths(["apple", "banana", "cherry"]));

// i have read this

// //https://www.w3schools.com/js/js_arrays.asp - წაიკითხეთ დამატებითი მასალა.
// W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.
// Image
// https://www.w3schools.com/js/js_array_methods.asp - თქვენით სცადეთ მეთოდების შესწავლა.



