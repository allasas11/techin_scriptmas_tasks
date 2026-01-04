
const stores = [
  [1.07, 2.92, 3.45, 1.09, 0.89],
  [1.08, 2.35, 3.75, 1.12, 0.69],
  [0.98, 2.48, 3.62, 1.10, 0.72] 
];

const output = document.getElementById("output");

let totalSpentAllStores = 0;

for (let i = 0; i < stores.length; i++) {
  const store = stores[i];
  const itemCount = store.length;

  const totalSpent = store.reduce((sum, price) => sum + price, 0);
  totalSpentAllStores += totalSpent;

  const p = document.createElement("p");
  p.textContent = `${i + 1} ${itemCount} ${totalSpent.toFixed(2)}`;
  output.appendChild(p);
}

const pTotal = document.createElement("p");
pTotal.textContent = totalSpentAllStores.toFixed(2);
output.appendChild(pTotal);
