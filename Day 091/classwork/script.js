let num = 0;

for (i = 1; i <= 100; i++) {
  if (num > 10000) {
    break;
  }
  num *= i;
}
console.log(num);

function foottoinch(foot) {
  foot = prompt("enter num foot");

  inch = foot * 12;
}

console.log(inch);
