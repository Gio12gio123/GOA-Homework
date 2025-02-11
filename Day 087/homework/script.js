// 1-დან 10-მდე რიცხვების ჯამის გამოთვლა
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("საბოლოო რიცხვების ჯამი არის " + sum);

// 1-დან 10-მდე რიცხვების კვადრატების დაბეჭდვა
for (let i = 1; i <= 10; i++) {
  console.log(i + " - ის კვადრატი არის " + i * i);
}

// სტრინგის თითოეული ასოს დაბეჭდვა
let str = "გამარჯობა";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
