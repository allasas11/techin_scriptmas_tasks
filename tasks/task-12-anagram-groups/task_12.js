function groupAnagrams(words) {
  const map = {};

  for (const word of words) {

    const sorted = word.split("").sort().join("");

    if (!map[sorted]) {
      map[sorted] = [];
    }

    map[sorted].push(word);
  }

  const grouped = Object.values(map);

  for (const group of grouped) {
    group.sort();
  }

  grouped.sort((a, b) => b.length - a.length);

  return grouped;
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

const result = groupAnagrams(words);

document.getElementById("anagram-output").textContent = JSON.stringify(result);
