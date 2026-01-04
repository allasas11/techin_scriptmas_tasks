function spinningClock(hours, minutes) {

  let newMinutes = minutes + 60;
  let newHours = hours;

  if (newMinutes >= 60) {
    newHours += Math.floor(newMinutes / 60);
    newMinutes = newMinutes % 60;
  }

  newHours = newHours % 24;

  return { hours: newHours, minutes: newMinutes };
}

const h = 22;
const m = 45;

const result = spinningClock(h, m);

document.getElementById("output").textContent = `New time: ${result.hours}h ${result.minutes}m`;
