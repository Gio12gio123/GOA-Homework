function displayDaysRemaining(eventDate) {
  const targetDate = new Date(eventDate);
  const currentDate = new Date();

  
  const timeDiff = targetDate - currentDate;

  const daysRemaining = Math.floor(timeDiff / (1000 * 60 * 60 * 24));


  document.getElementById(
    "daysRemaining"
  ).innerHTML = `Days Remaining: ${daysRemaining}`;

  
  const nextMidnight = new Date();
  nextMidnight.setHours(24, 0, 0, 0);
  const timeToMidnight = nextMidnight - currentDate;


  setTimeout(function () {
    displayDaysRemaining(eventDate); 
  }, timeToMidnight);
}


displayDaysRemaining("2025-12-31");
