function displayCurrentDateTime() {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  document.getElementById(
    "currentDateTime"
  ).innerHTML = `Current Date and Time: ${formattedDate}`;
}

function modifyDate() {
  const currentDate = new Date();
  currentDate.setFullYear(2025);
  currentDate.setMonth(5);
  currentDate.setDate(15);
  const modifiedFormattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  document.getElementById(
    "modifiedDateTime"
  ).innerHTML = `Modified Date and Time: ${modifiedFormattedDate}`;
}

displayCurrentDateTime();
