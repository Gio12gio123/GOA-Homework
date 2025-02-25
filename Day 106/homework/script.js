function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function fizzBuzz() {
  let modifiedNames = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      modifiedNames.push("FizzBuzz");
    } else if (i % 3 === 0) {
      modifiedNames.push("Fizz");
    } else if (i % 5 === 0) {
      modifiedNames.push("Buzz");
    } else {
      modifiedNames.push(i.toString());
    }
  }
  let names = ["Mikha", "Giorgi", "Ana", "Sofia", "Luka"];
  let randomName = names[Math.floor(Math.random() * names.length)];
  alert(randomName + " will pay for everyone's meal!");
}

function generateRandomNumbersAndCalculateMean(N) {
  let numbers = [];
  let sum = 0;
  for (let i = 0; i < N; i++) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNum);
    sum += randomNum;
  }
  return sum / N;
}

let year = 2000;
console.log(isLeapYear(year));

fizzBuzz();

let N = 10;
console.log(generateRandomNumbersAndCalculateMean(N));



