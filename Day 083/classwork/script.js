function classifyAge(age) {
  if (age > 80) {
    return "You are an old man!";
  } else if (age > 18) {
    return "You are an adult.";
  } else if (age > 12) {
    return "You are a teenager.";
  } else if (age > 5) {
    return "You are a child.";
  } else {
    return "You are very young.";
  }
}

let age = parseInt(prompt("Please enter your age:"));
if (isNaN(age)) {
  console.log("Please enter a valid number.");
} else {
  console.log(classifyAge(age));
}
function calculator(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Please enter valid numbers.";
  }

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Division by zero is not allowed.";
    } else {
      return num1 / num2;
    }
  } else {
    return "Please select a valid operator (+, -, *, /).";
  }
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Choose an operation (+, -, *, /):");

let result = calculator(num1, num2, operator);
console.log(result);
