function calculateMagicalToys(prices) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === 0) {
      break;
    }

    if (prices[i] > 10) {
      total += prices[i];
      count++;
    }
  }

  return {
    total,
    count
  };
}

const toyPrices = [5.6, 6.7, 12.3, 15.7, 0, 20, 50];

const result = calculateMagicalToys(toyPrices);

const total = result.total.toFixed(1);
const count = result.count;

document.getElementById("total").textContent =
  `Total price of magical toys: ${total} EUR`;

document.getElementById("count").textContent =
  `Number of magical toys: ${count}`;
