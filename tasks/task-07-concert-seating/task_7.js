function calculateTotalSeats(n, k) {
  let totalSeats = 0;
  let seatsInRow = k;

  for (let row = 1; row <= n; row++) {
    totalSeats += seatsInRow;
    seatsInRow += 2;
  }

  return totalSeats;
}

const numberOfRows = 5;
const firstRowSeats = 10;

const result = calculateTotalSeats(numberOfRows, firstRowSeats);

document.getElementById("result").textContent = `Total number of seats: ${result}`;

