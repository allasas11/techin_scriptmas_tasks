const EXTRA_TILES_PERCENT = 5;

function calculateTotalCost(length, width, pricePerM2) {
  const area = length * width;
  const multiplier = 1 + EXTRA_TILES_PERCENT / 100;
  return Math.round(area * pricePerM2 * multiplier);
}

const roomLength = 5;
const roomWidth = 4;
const pricePerM2 = 10;

const totalCost = calculateTotalCost(
  roomLength,
  roomWidth,
  pricePerM2
);

console.log(`Total cost: ${totalCost} coins`);

document.getElementById("result").textContent = `Total cost: ${totalCost} coins`;
