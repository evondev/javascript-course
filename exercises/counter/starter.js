const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);
buttonPlus.addEventListener("click", function () {
  if (counterValue >= 10) return 10;
  counterValue++;
  counterNumber.textContent = counterValue;
  // counterValue = counterValue + 1;
  // counterValue += 1;
});
buttonMinus.addEventListener("click", function () {
  if (counterValue <= 0) return 0;
  counterValue--;
  counterNumber.textContent = counterValue;

  // counterValue = counterValue - 1;
  // counterValue -= 1;
});
