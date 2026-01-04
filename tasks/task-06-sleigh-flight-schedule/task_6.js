function calculateLandingTime(a, b, c) {

  const totalMinutes = a * 60 + b + c;

  const v = Math.floor(totalMinutes / 60) % 24;

  const m = totalMinutes % 60;

  return { v, m };

}

const takeoffHour = 23;
const takeoffMinute = 55;
const flightDuration = 15;

const { v, m } = calculateLandingTime(takeoffHour, takeoffMinute, flightDuration);

document.getElementById("result").textContent = `Landing time: ${v} : ${m}`;