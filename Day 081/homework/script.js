let text = prompt();
console.log(text.slice(0, 140));



let name = prompt();
console.log("Hello " + name[0].toUpperCase() + name.slice(1));


function compareNames() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    console.log(name1.length === name2.length );
  }


  function performOperations() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
  }

  //for me :
  //slice - აბრუნებს სტრინგის ნაწილს.
  //toUpperCase - გადაყვანს სტრინგს დიდ ასოებში.
  //getElementById - აბრუნებს ელემენტს იდით.
  //value - აბრუნებს ელემენტის მნიშვნელობას.
  //parseFloat - გადაყვანს სტრინგს წილადად.
  //length - აბრუნებს სტრინგის სიგრძეს.