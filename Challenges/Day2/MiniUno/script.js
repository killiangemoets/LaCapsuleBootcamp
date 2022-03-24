var lastPlay = {
  couleur: "bleu",
  chiffre: "6",
};

var cards = [
  {
    couleur: "vert",
    chiffre: "6",
  },
  {
    couleur: "rouge",
    chiffre: "6",
  },
  {
    couleur: "bleu",
    chiffre: "9",
  },
  {
    couleur: "vert",
    chiffre: "9",
  },
];

const whatCardToPlay = function (cards, lastPlay) {
  let cardsToPlay = [];
  cards.forEach((card) => {
    if (
      card.couleur === lastPlay.couleur ||
      card.chiffre === lastPlay.chiffre
    ) {
      cardsToPlay.push(card);
    }
  });
  if (cardsToPlay.length === 0) console.log("Je passe mon tour");
  else console.log(cardsToPlay);
};

whatCardToPlay(cards, lastPlay);

const playACard = function (cards, lastPlay) {
  for (var i = 0; i < cards.length; i++) {
    if (
      cards[i].couleur === lastPlay.couleur ||
      cards[i].chiffre === lastPlay.chiffre
    ) {
      cards.splice(i, 1);
      if (cards.length === 1) console.log("UNOOOO!!!");
      if (cards.length === 0) console.log("Gagné!!!");
      break;
    }
  }
  return cards;
};

const cardsUpdated = playACard(cards, lastPlay);
console.log(cardsUpdated);
const cardsUpdated2 = playACard(cardsUpdated, lastPlay);
console.log(cardsUpdated2);
const cardsUpdated3 = playACard(cardsUpdated2, lastPlay);
console.log(cardsUpdated);
const cardsUpdated4 = playACard(cardsUpdated3, lastPlay);
console.log(cardsUpdated4);
