// rewiew (for me)
let person1 = {
  name: "gio",
  age: 12,
};

person1.country = "Georgia";
console.log(person1.country);

// classwork
// Level 97:
// Object
// შექმენით ობიექტი car, რომელსაც ექნება მინიჭებული თვისებები, ეს თვისებები უნდა იყვეს - 1. brand    2. model    3. year   4. color   5. weight   (თვისებებს მიანიჭეთ მნიშვნელობები თქვენით)

// შექმნილ ობიექტს დაამატეთ მეთოდი, რომელიც გამოიტანს წინადადებას ამ თვისებების დახმარებით - მაგ: 'ამ მანქანის ბრენდია ...., კონკრეტული მოდელია ....' და ა.შ

// გამოიტანეთ car ობიექტიდან ყველა მნიშვნელობა ინდივიდუალურად.

// car ობიექტში შეცვლაეთ ყველა თვისების მნიშვნელობა.

// car ობიექტში დაამატეთ ახალი თვისება, რომელიც იქნება mode.

// car ობიექტში დამატებული თვისება ამოშალეთ.

// ობიექტთან გამოიყენეთ პირობითი განცხადებები და შეამოწმეთ ობიექტში მითითებული მანქანის ბრენდი თქვენც გყავთ თუ არა, თუ გყავთ, მაშინ გამოიტანეთ - 'იგივე მანქანის ბრენდი გვყოლია ძმობილო', ხოლო სხვა შემთხვევაში გამოიტანეთ - ' სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს'

let car = {
  brand: "porsche 911 gt3 rs",
  model: "gt3 rs",
  year: 2024,
  color: "Black & Orange",
  weight: "2000kg",

  Cardetails: function () {
    `The brand of this car is ${this.brand}, the model is ${this.model}, the year of manufacture is ${this.year}, the color is ${this.color}, and the weight is ${this.weight} `;
  },
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

car.brand = "BMW";
car.model = "X5";
car.year = 2022;
car.color = "Black";
car.weight = 2200;

car.mode = "Sport";

delete car.mode;

Letmycarbrand = "porsche";

if (car.brand === myCarBrand) {
  console.log("We have the same car bro!");
} else {
  console.log("mines better");
}
console.log(car);
