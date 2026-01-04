function calculateArcheryPoints(xc, yc, radii, points, arrowX, arrowY) {

  const dx = arrowX - xc;
  const dy = arrowY - yc;
  const distance = Math.sqrt(dx * dx + dy * dy);

  for (let i = 0; i < radii.length; i++) {
    if (distance < radii[i]) {
      return points[i];
    } else if (distance === radii[i]) {
      return points[i] / 2;
    }
  }

  return 0;
}

const centerX = 0;
const centerY = 0;
const ringRadii = [1, 2, 3]; 
const ringPoints = [10, 5, 2]; 
const arrowX = 1.5; 
const arrowY = 0.5;

const score = calculateArcheryPoints(centerX, centerY, ringRadii, ringPoints, arrowX, arrowY);

document.getElementById("points-output").textContent = `Elf scored: ${score} points`;
