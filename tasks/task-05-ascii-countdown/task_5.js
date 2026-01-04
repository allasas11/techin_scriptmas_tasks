const DIGITS = [
` █████ 
 █   █ 
 █   █ 
 █   █ 
 █████ `,

`   █   
  ██   
   █   
   █   
  ███  `,

` █████ 
     █ 
 █████ 
 █     
 █████ `,

` █████ 
     █ 
 █████ 
     █ 
 █████ `,

` █   █ 
 █   █ 
 █████ 
     █ 
     █ `,

` █████ 
 █     
 █████ 
     █ 
 █████ `,

` █████ 
 █     
 █████ 
 █   █ 
 █████ `,

` █████ 
     █ 
     █ 
     █ 
     █ `,

` █████ 
 █   █ 
 █████ 
 █   █ 
 █████ `,

` █████ 
 █   █ 
 █████ 
     █ 
 █████ `
];

function renderNumber(num) {
  if (num < 10) {
    return DIGITS[num];
}

  const digits = String(num).split("");

  const asciiLinesArray = digits.map(d => DIGITS[Number(d)].split("\n"));

  const combinedLines = asciiLinesArray.reduce((acc, curr) =>
    acc.map((line, i) => line + " " + curr[i])
  );

  return combinedLines.join("\n");
}


let counter = 10;

const messages = [
  "Santa is preparing…",
  "Reindeer are buckling up…",
  "Sleigh warming up…"
];

const asciiElement = document.getElementById("ascii");
const messageElement = document.getElementById("message");

const interval = setInterval(() => {

  asciiElement.textContent = renderNumber(counter);

  messageElement.textContent = messages[counter % messages.length];

  if (counter === 0) {
    clearInterval(interval);

    messageElement.textContent =
      "🎅✨ SANTA’S SLEIGH IS LAUNCHING! ✨🎅";
  }

  counter--;
}, 1000);


