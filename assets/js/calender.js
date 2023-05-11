// Get the current date
let today = new Date();

// Set the month and year to the current month and year
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Get the elements to update the month and year
let monthElement = document.getElementById("month");
let yearElement = document.getElementById("year");

// Update the month and year on the page
monthElement.innerHTML = getMonthName(currentMonth);
yearElement.innerHTML = currentYear;

// Get the element to display the days in the month
let daysElement = document.querySelector(".days");

// Set the days in the month to display
setDaysInMonth(currentMonth, currentYear);

// Get the checkboxes for the habits
let checkboxes = document.querySelectorAll("input[type='checkbox']");

// Add event listeners to the checkboxes
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function() {
    if (this.checked) {
      this.parentNode.classList.add("completed");
    } else {
      this.parentNode.classList.remove("completed");
    }
  });
});

// Function to get the name of the month
function getMonthName(monthIndex) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[monthIndex];
}

// Function to set the days in the month
function setDaysInMonth(month, year) {
  // Clear the existing days
  daysElement.innerHTML = "";

  // Get the number of days in the month
  let numDays = new Date(year, month + 1, 0).getDate();

  // Get the day of the week for the first day of the month
  let firstDay = new Date(year, month, 1).getDay();

  // Add blank li elements for the days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    let li = document.createElement("li");
    daysElement.appendChild(li);
  }

  // Add li elements for the days in the month
  for (let i = 1; i <= numDays; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    daysElement.appendChild(li);
  }
}

// Get the buttons to change the month
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

// Add event listeners to the buttons
prevButton.addEventListener("click", function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  monthElement.innerHTML = getMonthName(currentMonth);
  yearElement.innerHTML = currentYear;
  setDaysInMonth(currentMonth, currentYear);
});

nextButton.addEventListener("click", function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  monthElement.innerHTML = getMonthName(currentMonth);
  yearElement.innerHTML = currentYear;
  setDaysInMonth(currentMonth, currentYear);
});
