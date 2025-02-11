const academy = {
  name: "Tech Academy",
  courses: ["JavaScript", "Python", "Web Development"],
  socialLink: "https://www.techacademy.com",
  reviews: {
    user1: {
      name: "David",
      status: "parent",
      review: "Great academy with excellent courses!",
    },
    user2: {
      name: "Nino",
      status: "child",
      review: "I learned a lot, but I want more advanced topics.",
    },
    user3: {
      name: "Giorgi",
      status: "parent",
      review: "The instructors are very helpful.",
    },
  },
};

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log("name" in academy);
console.log("location" in academy);

const extendedAcademy = {
  ...academy,
  member: {
    id: 1,
    name: "Giorgi Bakhtadze",
  },
};

console.log(extendedAcademy);

Object.freeze(academy);

console.log(Object.isFrozen(academy));
