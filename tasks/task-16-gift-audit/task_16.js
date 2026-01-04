
const workshops = [
  [5, 7, 3],
  [6, 4, 4, 5],
  [10, 2]
];

let totalGifts = 0;

const output = document.getElementById("output");

for (let w = 0; w < workshops.length; w++) {
  const workshop = workshops[w];
  let workshopTotal = 0;

  for (let e = 0; e < workshop.length; e++) {
    workshopTotal += workshop[e];
  }

  totalGifts += workshopTotal;

  const p = document.createElement("p");
  p.textContent = `Workshop ${w + 1} made ${workshopTotal} gifts`;
  output.appendChild(p);
}

const pTotal = document.createElement("p");
pTotal.textContent = `Santa’s total gift count is ${totalGifts}`;
output.appendChild(pTotal);
