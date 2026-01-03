function trimNumber(number) {
  const digits = number.toString();
  console.log(digits);

  const firstDigit = digits[0];
  const lastDigit = digits[digits.length - 1];

  return Number(firstDigit + lastDigit);
}

const inputNumber = 1102;

const result = trimNumber(inputNumber);

document.getElementById("result").textContent =
  `Original number: ${inputNumber}, new number: ${result}`;
