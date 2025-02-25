const hotel = {
  hotelName: "Grand Hotel",
  stars: 5,
  location: "Tbilisi, Georgia",
  guestReviews: {
    guest1: {
      name: "Ana",
      review: "Amazing stay! Highly recommend.",
    },
    guest2: {
      name: "Giorgi",
      review: "Good service, but the room was a bit small.",
    },
    guest3: {
      name: "Nino",
      review: "Great experience, loved the food and the spa.",
    },
  },
};

console.log(Object.entries(hotel));
console.log("spa" in hotel);
const extendedHotel = {
  ...hotel,
  roomsCount: 100,
};
console.log(extendedHotel.roomsCount);
Object.freeze(hotel);
hotel.hotelName = "Luxury Hotel";
console.log(hotel.hotelName);
console.log(Object.isFrozen(hotel));

const cinema = {
  cinemaName: "Cinema Max",
  moviesCount: 50,
  location: "Tbilisi, Georgia",
  movieReviews: {
    user1: {
      name: "David",
      review: "Great movie selection, comfortable seats.",
    },
    user2: {
      name: "Mariam",
      review: "Good experience but the popcorn was too salty.",
    },
    user3: {
      name: "Lasha",
      review: "Nice theater, would love more screen options.",
    },
  },
};

console.log(Object.entries(cinema));
console.log("vipSeats" in cinema);
const extendedCinema = {
  ...cinema,
  ticketPrice: 15,
};
console.log(extendedCinema.ticketPrice);
Object.freeze(cinema);
cinema.cinemaName = "Cinema World";
console.log(cinema.cinemaName);
console.log(Object.isFrozen(cinema));

console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));

const obj1 = { name: "Alice" };
Object.preventExtensions(obj1);
obj1.age = 25;
console.log(obj1);

const obj2 = { name: "Bob" };
console.log(Object.isExtensible(obj2));
Object.preventExtensions(obj2);
console.log(Object.isExtensible(obj2));

const obj3 = { name: "Charlie" };
const obj4 = { age: 30 };
const obj5 = Object.assign({}, obj3, obj4);
console.log(obj5);

const obj6 = { country: "Georgia" };
const obj7 = { city: "Tbilisi" };
const obj8 = { population: 1200000 };
const mergedObj = Object.assign({}, obj6, obj7, obj8);
console.log(mergedObj);


//for me :

//Object.entries - აბრუნებს მასივს, რომელშიც შეიცავს შესაბამისი ობიექტის ყველა კლავიატურულ და მნიშვნელობას.
//in - აბრუნებს true-ს, თუ მითითებული პროპერტი არის ობიექტში, და false-ს, თუ არ არის.
//Object.freeze - გაუქმებს ობიექტის შეცვლას.
//Object.isFrozen - აბრუნებს true-ს, თუ ობიექტი გაყიდულია და false-ს, თუ არა.
//Object.is - აბრუნებს true-ს, თუ ორი პარამეტრი ტოლია და false-ს, თუ არა.
//Object.preventExtensions - აუქმებს ობიექტის შემატების შესაძლებლობას.
//Object.isExtensible - აბრუნებს true-ს, თუ ობიექტი შეიცავს შესაძლებლობას დამატებისას და false-ს, თუ არა.
//Object.assign - აბრუნებს ახალ ობიექტს, რომელშიც შეიცავს ყველა მითითებულ პარამეტრს.
//spread operator - ახალ პროპერტის დამატება ობიექტში.
//Object - არის ყველა ობიექტის მშობლიური კლასი.
