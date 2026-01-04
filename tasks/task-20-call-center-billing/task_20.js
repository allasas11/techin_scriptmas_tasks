// Step 1: Input data
const elves = [
  {
    firstName: "Jingle",
    lastName: "Sparkfoot",
    calls: [
      { city: "London", minutes: 12 },
      { city: "Paris", minutes: 7 }
    ]
  },
  {
    firstName: "Twinkle",
    lastName: "Icicletoes",
    calls: [
      { city: "NewYork", minutes: 20 },
      { city: "London", minutes: 5 }
    ]
  },
  {
    firstName: "Pudding",
    lastName: "Gumdrops",
    calls: [
      { city: "Paris", minutes: 15 }
    ]
  }
];

const priceList = {
  London: 0.50,
  Paris: 0.40,
  NewYork: 0.70
};

for (let elf of elves) {
  let totalCost = 0;
  for (let call of elf.calls) {
    const pricePerMin = priceList[call.city] || 0;
    totalCost += pricePerMin * call.minutes;
  }
  elf.totalCost = totalCost;
}

elves.sort((a, b) => a.lastName.localeCompare(b.lastName));

const output = document.getElementById("output");
let totalAllElves = 0;

for (let elf of elves) {
  const p = document.createElement("p");
  p.textContent = `${elf.lastName} ${elf.firstName} ${elf.totalCost.toFixed(2)}`;
  output.appendChild(p);
  totalAllElves += elf.totalCost;
}

const pTotal = document.createElement("p");
pTotal.textContent = `Total: ${totalAllElves.toFixed(2)}`;
output.appendChild(pTotal);
