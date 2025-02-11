class Book {
  constructor(title, author, pages, publishYear) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishYear = publishYear;
  }

  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.publishYear}. It has ${this.pages} pages.`;
  }
}

class Customer {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }
}

class Movie {
  constructor(title, director, releaseYear, duration) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.duration = duration;
  }

  getMovieInfo() {
    return `${this.title}, directed by ${this.director}, released in ${this.releaseYear}. Duration: ${this.duration} minutes.`;
  }
}

class Ticket {
  constructor(eventName, eventDate, price, isAvailable) {
    this.eventName = eventName;
    this.eventDate = eventDate;
    this.price = price;
    this.isAvailable = isAvailable;
  }

  purchaseTicket() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `Ticket for ${this.eventName} on ${this.eventDate} purchased successfully.`;
    } else {
      return `Ticket for ${this.eventName} on ${this.eventDate} is not available.`;
    }
  }
}
