const cardArray = [
  {
    name: "fries",
    img: "images/fries.jpg",
  },
  {
    name: "hamburger",
    img: "images/hamburger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hot-dog.jpg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },

  {
    name: "fries",
    img: "images/fries.jpg",
  },
  {
    name: "hamburger",
    img: "images/hamburger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hot-dog.jpg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardChosenIds = [];
const cardsWon = [];
let result = 0;
let score = document.querySelector("#result");


function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blure.jpg");
    card.setAttribute("class", "images");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
    score.innerHTML = result;
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];

  if (optionOneId == optionTwoId) {
  }
  if (cardsChosen[1] == cardsChosen[0]) {
    result += 2;
    score.innerHTML = result;
    console.log("matched");
    cards[optionOneId].setAttribute("src", "images/white.jpg");
    cards[optionTwoId].setAttribute("src", "images/white.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blure.jpg");
    cards[optionTwoId].setAttribute("src", "images/blure.jpg");
    result -= 1;
    score.innerHTML = result;
  }

  cardsChosen = [];
  cardChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    if (result >= 0) {
        
       alert("youwon")

    } else {
        alert("youlose")
       
    }
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");

  cardsChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
