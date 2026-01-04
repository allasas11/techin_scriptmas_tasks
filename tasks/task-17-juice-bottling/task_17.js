
const juiceAmounts = [45, 92, 33];

const output = document.getElementById("output");

for (let i = 0; i < juiceAmounts.length; i++) {
  let remaining = juiceAmounts[i];

  const fiveLiter = Math.floor(remaining / 5);
  remaining %= 5;

  const twoLiter = Math.floor(remaining / 2);
  remaining %= 2;

  const oneLiter = remaining;

  const p = document.createElement("p");
  p.textContent = `${fiveLiter} ${twoLiter} ${oneLiter}`;
  output.appendChild(p);
}
