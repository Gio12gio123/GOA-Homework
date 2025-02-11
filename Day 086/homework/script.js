function simple_calculator(num1, num2, operation) {
  if (operation === "დამატება") {
    return num1 + num2;
  } else if (operation === "გამოკლება") {
    return num1 - num2;
  } else if (operation === "გამრავლება") {
    return num1 * num2;
  } else if (operation === "გაყოფა") {
    if (num2 === 0) {
      return "შეცდომა: ნულზე გაყოფა შეუძლებელია";
    } else {
      return num1 / num2;
    }
  } else {
    return "შეცდომა: არასწორი ოპერაცია";
  }
}

console.log(simple_calculator(10, 5, "დამატება"));
console.log(simple_calculator(10, 5, "გამოკლება"));
console.log(simple_calculator(10, 5, "გამრავლება"));
console.log(simple_calculator(10, 5, "გაყოფა"));
console.log(simple_calculator(10, 0, "გაყოფა"));
console.log(simple_calculator(10, 5, "არასწორი"));

function checkEvenOdd(num) {
  if (num % 2 === 0) console.log("ლუწი");
  else console.log("კენტი");
}

function square(num) {
  console.log(num * num);
}

function checkPosNegZero(num) {
  if (num > 0) console.log("დადებითი");
  else if (num < 0) console.log("უარყოფითი");
  else console.log("ნული");
}

checkEvenOdd(4);
checkEvenOdd(7);

square(5);

checkPosNegZero(10);
checkPosNegZero(-5);
checkPosNegZero(0);
