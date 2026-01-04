function findPerfectMelon(weights) {
  const n = weights.length;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += weights[i];
  }
  const average = sum / n;

  let closestIndex = 0;
  let smallestDifference = Math.abs(weights[0] - average);

  for (let i = 1; i < n; i++) {
    const difference = Math.abs(weights[i] - average);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      closestIndex = i;
    }
  }

  return {
    melonNumber: closestIndex + 1,
    melonWeight: weights[closestIndex].toFixed(2)
  };
}

const melonWeights = [4, 3, 7, 8];

const {melonNumber, melonWeight} = findPerfectMelon(melonWeights);

document.getElementById('output').textContent = `Melon number: ${melonNumber}, Melon weight: ${melonWeight} kg`;