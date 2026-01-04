
const toyNumbers = [5, 12, 6, 7, 13, 7, 9, 10, 12, 17, 5, 16, 2, 2, 5, 4, 6];

const toyCount = {};

for (let toy of toyNumbers) {
  if (toyCount[toy]) {
    toyCount[toy] += 1;
  } else {
    toyCount[toy] = 1;
  }
}

const duplicates = [];
for (let toy in toyCount) {
  if (toyCount[toy] > 1) {
    duplicates.push(Number(toy));
  }
}

duplicates.sort((a, b) => a - b);

const output = document.getElementById("output");
const p = document.createElement("p");
p.textContent = duplicates.join(" ");
output.appendChild(p);
