function calculateTimeSinceMidnight(hours, minutes) {
  const minutesPassed = hours * 60 + minutes;
  const secondsPassed = minutesPassed * 60;

  return {
    minutes: minutesPassed,
    seconds: secondsPassed
  };
}

const currentHours = 1;
const currentMinutes = 30; 

const result = calculateTimeSinceMidnight(currentHours, currentMinutes);

document.getElementById("minutes").textContent = `Minutes passed: ${result.minutes}`;
document.getElementById("seconds").textContent = `Seconds passed: ${result.seconds}`;