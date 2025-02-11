function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

function checkEmail(email) {
  const regex = /^[^@]+@[^@]+\.[^@]+$/;
  return regex.test(email) ? "access granted" : "invalid email";
}

function compareNumbers(num1, num2) {
  if (num1 === num2) {
    return "რიცხვები უდრის ერთმანეთს";
  } else if (num1 > num2) {
    return "პირველი რიცხვი დიდი არის";
  } else {
    return "მეორე რიცხვი დიდი არის";
  }
}

function financialPlan(age, gender, income) {
  if (age >= 18) {
    if (gender === "ქალი") {
      if (income > 5000) {
        return "თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია";
      } else if (income > 3000) {
        return "ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.";
      } else {
        return "გჭირდებათ ფინანსური გეგმის გაუმჯობესება";
      }
    } else if (gender === "კაცია") {
      if (income > 6000) {
        return "თქვენ მზად ხართ ინვესტიციებისთვის!";
      } else if (income > 4000) {
        return "შემოსავალი სტაბილურია";
      } else {
        return "გჭირდებათ ფინანსური გეგმის გაუმჯობესება";
      }
    }
  } else {
    return "მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია";
  }
}

function switchExample(option) {
  switch (option) {
    case 1:
      return "Option 1 selected";
    case 2:
      return "Option 2 selected";
    default:
      return "Invalid option";
  }
}

function checkSuccess(age, grade) {
  return age >= 18
    ? grade > 50
      ? "თქვენ წარმატებული ხართ"
      : "გჭირდებათ მეტი სწავლა"
    : "შენც ბავშვი ხარ, მაგრამ შეგიძლია წარმატებას მიაღწიო";
}

function sumPrimes() {
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

function loopExample() {
  for (let i = 1; i <= 50; i++) {
    if (i === 25) continue;
    if (i % 2 === 0) console.log(i);
  }
}
