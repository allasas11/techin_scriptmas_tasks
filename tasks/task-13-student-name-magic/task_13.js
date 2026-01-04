
const students = [
  "Petraitis Rokas",
  "Augė Artūras",
  "Mikalauskaitė Aušra",
  "Šlivka Donatas",
  "Stakėnaitė Ieva",
  "Skrėbė Domas",
  "Bruzgaitė Akvilė"
];

const FEMALE_ENDINGS = ["a", "ė"];

let girlCount = 0;
const girls = [];

for (const student of students) {
  const parts = student.split(" ");
  const firstName = parts[1];

  if (FEMALE_ENDINGS.some(letter => firstName.endsWith(letter))) {
    girls.push(student);
    girlCount++;
  }
}

document.getElementById("girl-count").textContent = girlCount;

const girlNamesContainer = document.getElementById("girl-names");
girls.forEach(name => {
  const p = document.createElement("p");
  p.textContent = name;
  girlNamesContainer.appendChild(p);
});
