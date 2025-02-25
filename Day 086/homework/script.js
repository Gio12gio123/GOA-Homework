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


//for me :
//if - შეაფასებს შეყვანილ პარამეტრს და აბრუნებს შედეგს.
//else if - შეყვანილი პარამეტრის შეფასებული შედეგის გარეშე გამოსაყვებად.
//else - შეყვანილი პარამეტრის შეფასებული შედეგის გარეშე გამოსაყვებად.
//console.log - აბრუნებს შედეგს.
//function - შექმნის ფუნქციას.
//return - აბრუნებს შედეგს.
//შეცდომა - აბრუნებს შეცდომის შეტყობინებას.
//შეცდომა: არასწორი ოპერაცია - აბრუნებს შეცდომის შეტყობინებას.
//შეცდომა: ნულზე გაყოფა შეუძლებელია - აბრუნებს შეცდომის შეტყობინებას.
//ლუწი - აბრუნებს ლუწი რიცხვს.
//კენტი - აბრუნებს კენტ რიცხვს.
//დადებითი - აბრუნებს დადებით რიცხვს.
//უარყოფითი - აბრუნებს უარყოფით რიცხვს.
//ნული - აბრუნებს ნულს. 
//დამატება - აბრუნებს რიცხვების ჯამს.
//გამოკლება - აბრუნებს რიცხვების სხვადასხვას.
//გამრავლება - აბრუნებს რიცხვების ნამრავლს.
//გაყოფა - აბრუნებს რიცხვების გაყოფას.
