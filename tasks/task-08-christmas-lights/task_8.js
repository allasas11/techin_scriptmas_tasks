function generateLightsGrid(N) {
  let result = "";

  result += "#".repeat(N * 2 + 3) + "\n";

  for (let row = 1; row <= N; row++) {
    result += "# ";

    for (let col = 1; col <= N; col++) {
      const sum = row + col;

      if (sum % 3 === 0 && sum % 5 === 0) {
        result += "G ";
      } else if (sum % 3 === 0) {
        result += "T ";
      } else if (sum % 5 === 0) {
        result += "S ";
      } else {
        result += ". ";
      }
    }

    result += "#\n";
  }

  result += "#".repeat(N * 2 + 3);

  return result;
}

const N = 6;


document.getElementById("output").textContent =
  generateLightsGrid(N);

// Debug
console.log(generateLightsGrid(N));
