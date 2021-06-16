const counterNumber = document.querySelector(".counter-number");
const counterAdd = document.querySelector(".counter-increase");
const counterMinus = document.querySelector(".counter-descrease");
let counterValue = parseInt(counterNumber.textContent);
counterAdd.addEventListener("click", function () {
  counterValue++;
  counterNumber.textContent = counterValue;
});
counterMinus.addEventListener("click", function () {
  if (counterValue <= 0) return 0;
  counterValue--;
  counterNumber.textContent = counterValue;
});
