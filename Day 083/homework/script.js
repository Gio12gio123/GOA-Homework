function checkNumber(num) {
  if (num % 2 === 0) {
    return "This number is even";
  } else {
    return "This number is odd";
  }
}

let number = parseInt(prompt("Enter a number:"));
console.log(checkNumber(number));

function checkTemperature(temp) {
  if (temp < 0) {
    return "Cold";
  } else if (temp >= 0 && temp <= 25) {
    return "Moderate";
  } else {
    return "Hot";
  }
}

let temperature = parseFloat(prompt("Enter the temperature in Celsius:"));
console.log(checkTemperature(temperature));

function gradeSystem(score) {
  if (score >= 90 && score <= 100) {
    return "Grade: A";
  } else if (score >= 80 && score < 90) {
    return "Grade: B";
  } else if (score >= 70 && score < 80) {
    return "Grade: C";
  } else if (score >= 60 && score < 70) {
    return "Grade: D";
  } else {
    return "Grade: F";
  }
}

let score = parseInt(prompt("Enter your score (0-100):"));
console.log(gradeSystem(score));
