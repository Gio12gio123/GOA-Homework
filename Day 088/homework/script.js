let password = "Group 41 is best"; // სწორი პაროლი
let attempts = 3; // მაქსიმალური ცდების რაოდენობა

function checkPassword() {
  while (attempts > 0) {
    let userInput = prompt("გთხოვთ შეიყვანოთ პაროლი:");

    if (userInput === password) {
      alert("თქვენი შეყვანილი პაროლი სწორია");
      return;
    } else {
      attempts--;
      alert("არასწორი პაროლი. დარჩენილია " + attempts + " ცდა");
    }
  }
  alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
}

checkPassword(); // ფუნქციის გამოძახება

function factorial(N) {
  let result = 1;
  for (let i = 1; i <= N; i++) {
    result *= i;
  }
  return result;
}

let N = 5; // მაგალითი: ფაქტორიალი 5-ისთვის
console.log(N + " რიცხვის ფაქტორიალია: " + factorial(N));

function countdown() {
  for (let i = 100; i >= 0; i--) {
    console.log(i + " დარჩენილია " + i + " წამი");
  }
}

countdown(); // ფუნქციის გამოძახება
