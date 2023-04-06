// get the div element for displaying the clock
const clock = document.getElementById("clock");

// function to update the clock every second
function updateClock() {
  // get the current time
  const now = new Date();

  // format the time into 12-hour format
  let hours = now.getHours();
  let ampm = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12; // convert to 12-hour format
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds} ${ampm}`;

  // display the formatted time in the div element
  clock.textContent = time;
}

// call the function once to initialize the clock
updateClock();

// update the clock every second
setInterval(updateClock, 1000);
