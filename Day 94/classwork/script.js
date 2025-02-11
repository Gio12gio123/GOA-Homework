let subject = prompt("enter first subject");
let subject1 = prompt("enter first subject");
let subject2 = prompt("enter first subject");

subject = Number(subject);
subject1 = Number(subject1);
subject2 = Number(subject2);

let avg = (subject + subject1 + subject2) / 3;

if ((avg > 90) & (avg < 100)) {
  alert("Grade: A");
} else if ((avg >= 70) & (avg < 80)) {
  alert("Grade: B");
} else if ((average >= 50) & (average < 65)) {
  alert("Grade: C");
} else if ((average >= 25) & (average < 50)) {
  alert("Grade: D");
} else {
  alert("Grade: Go study and come back later");
}
