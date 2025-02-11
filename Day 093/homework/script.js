function getTransportRecommendation() {
  let name = prompt("Enter your name:");
  let age = parseInt(prompt("Enter your age:"));
  let distance = parseFloat(
    prompt("Enter the distance to your workplace (in km):")
  );
  let workDays = parseInt(
    prompt("Enter the number of workdays per week (0-7):")
  );

  if (age < 16) {
    alert(name + ", please ask for permission from an adult to travel.");
  } else if (age >= 16 && age < 65) {
    if (distance <= 5) {
      alert(
        name +
          ", your workplace is less than 5 km away. Recommended transport: Bicycle."
      );
    } else if (distance > 5 && distance <= 20) {
      alert(
        name +
          ", your workplace is between 5 and 20 km away. Recommended transport: Car."
      );
    } else {
      alert(
        name +
          ", your workplace is more than 20 km away. Recommended transport: Train."
      );
    }

    if (workDays >= 5) {
      alert(
        name +
          ", since you work " +
          workDays +
          " days a week, you may be eligible for transport discounts."
      );
    }
  } else {
    alert(
      name +
        ", you are over 65 years old. Please consult with your manager or family for transport recommendations."
    );
  }
}

getTransportRecommendation();

function checkUserFitness() {
  let name = prompt("Enter your name:");
  let age = parseInt(prompt("Enter your age:"));
  let dailyRunDistance = parseFloat(
    prompt("Enter the distance you run daily (in km):")
  );
  let workoutDays = parseInt(
    prompt("Enter the number of workout days per week (0-7):")
  );

  if (age < 16 || age >= 60) {
    alert(
      name +
        ", please consult a doctor before continuing with any physical activities."
    );
  }

  let weeklyRunDistance = dailyRunDistance * workoutDays;

  if (weeklyRunDistance < 20) {
    alert(
      name +
        ", you may need to exercise more. Weekly run distance: " +
        weeklyRunDistance +
        " km."
    );
  }
}

checkUserFitness();
