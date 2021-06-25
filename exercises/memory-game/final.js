const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.png",
  },
  {
    name: "burger",
    img: "img/burger.png",
  },
];
let previousCard;
let count = 0;
let firstGuess = "";
let secondGuess = "";
const delay = 1000;
const grid = document.querySelector(".grid");
// array.sort(() => 0.5 - Math.random()): random array
function generateCard() {
  // reset innerHTML
  grid.innerHTML = "";
  const cardsArrayMerge = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());
  cardsArrayMerge.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-name", item.name);
    // front card
    const front = document.createElement("div");
    front.classList.add("front");
    // back card
    const back = document.createElement("div");
    back.classList.add("back");
    // card.dataset.name = item.name;
    back.style.backgroundImage = `url(${item.img})`;
    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);
  });
}
generateCard();
function matchingCard() {
  const selects = document.querySelectorAll(".selected");
  [...selects].forEach((item) => item.classList.add("matched"));
}
function resetGuess() {
  count = 0;
  firstGuess = "";
  secondGuess = "";
  previousCard = null;
  const selects = document.querySelectorAll(".selected");
  const matchedAll = document.querySelectorAll(".matched");
  const cardLength = document.querySelectorAll(".card").length;
  [...selects].forEach((item) => item.classList.remove("selected"));
  if (matchedAll.length === cardLength) {
    // done game -> reset game
    setTimeout(
      matchedAll.forEach((el) => el.classList.remove("matched")),
      1000
    );
    setTimeout(generateCard, delay);
  }
}
grid.addEventListener("click", function (event) {
  const clicked = event.target;
  if (
    clicked.nodeName === "SECTION" ||
    previousCard === clicked ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("matched")
  ) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(matchingCard, delay);
      }
      setTimeout(resetGuess, delay);
    }
    previousCard = clicked;
  }
});
