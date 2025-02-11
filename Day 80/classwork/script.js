 let myName = "gio";
let  myAge = "12";

alert("hello my name is " + myName + "i am " + myAge +"years old");




const form = document.querySelector('form');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    
    const sum = number1 + number2;
    const difference = number1 - number2;
    const product = number1 * number2;
    const quotient = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
    
    result.innerHTML = `
        ჯამი: ${sum}<br>
        სხვაობა: ${difference}<br>
        ნამრავლი: ${product}<br>
        განაყოფი: ${quotient}
    `;
});
