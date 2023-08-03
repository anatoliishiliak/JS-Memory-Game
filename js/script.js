const cardArray = [
  {
    name: "picture1",
    img: "img/1.png",
  },
  {
    name: "picture2",
    img: "img/2.png",
  },
  {
    name: "picture3",
    img: "img/3.png",
  },
  {
    name: "picture4",
    img: "img/4.png",
  },
  {
    name: "picture5",
    img: "img/5.png",
  },
  {
    name: "picture6",
    img: "img/6.png",
  },
  {
    name: "picture1",
    img: "img/1.png",
  },
  {
    name: "picture2",
    img: "img/2.png",
  },
  {
    name: "picture3",
    img: "img/3.png",
  },
  {
    name: "picture4",
    img: "img/4.png",
  },
  {
    name: "picture5",
    img: "img/5.png",
  },
  {
    name: "picture6",
    img: "img/6.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

const resultDisplay = document.querySelector("#result");

let cardChosen = [];

let cardChosenId = [];

const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");

  console.log("pipipisi");

  const optionOneId = cardChosenId[0];

  const optionTwoId = cardChosenId[1];

  if (cardChosen[0] == cardChosen[1] && optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("SAME CARD");
  }

  if (cardChosen[0] == cardChosen[1] && optionOneId !== optionTwoId) {
    alert("YES!!!");

    cards[optionOneId].setAttribute("src", "img/Solid_white.png");
    cards[optionTwoId].setAttribute("src", "img/Solid_white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("TRY AGAIN!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardChosenId = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "CONGRATULATIONS YOU WIN!!!";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");

  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  console.log(cardChosen);

  console.log(cardChosenId);

  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 100);
  }
}
