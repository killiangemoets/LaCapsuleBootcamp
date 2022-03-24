var lastPlay = {
  couleur: "blue",
  chiffre: "6",
};

var cards = [
  {
    couleur: "green",
    chiffre: "6",
  },
  {
    couleur: "red",
    chiffre: "6",
  },
  {
    couleur: "blue",
    chiffre: "9",
  },
  {
    couleur: "green",
    chiffre: "9",
  },
];

const stack = document.querySelector(".stack");
const myCards = document.querySelector(".myCards");
const message = document.querySelector(".message");

const state = {
  lastPlay: lastPlay,
  cards: cards,
};

const renderStack = function () {
  stack.innerHTML = "";
  const markup = `
    <div class="card" style="background-color: ${state.lastPlay.couleur}">
      <p>${state.lastPlay.chiffre}</p>
    </div>
  `;
  stack.innerHTML = markup;
};

const updateAndRenderMyCards = function () {
  myCards.innerHTML = "";
  let markup = "";
  state.cards.forEach((card, i) => {
    markup += `
    <div class="card ${
      card.couleur === state.lastPlay.couleur ||
      card.chiffre === state.lastPlay.chiffre
        ? "allow-to-play"
        : ""
    }" style="background-color: ${card.couleur}" data-num="${i}">
      <p>${card.chiffre}</p>
    </div>
    `;

    state.cards[i].allowToPlay =
      card.couleur === state.lastPlay.couleur ||
      card.chiffre === state.lastPlay.chiffre
        ? true
        : false;
  });
  myCards.innerHTML = markup;
};

const init = function () {
  renderStack();
  updateAndRenderMyCards();
  // console.log(state);
};
init();

myCards.addEventListener("click", function (e) {
  const cardElement = e.target.closest(".card");
  if (!cardElement) return;
  const index = cardElement.dataset.num;
  const cardData = state.cards[index];
  if (cardData?.allowToPlay) {
    state.lastPlay = cardData;
    state.cards.splice(index, 1);

    if (state.cards.length === 1)
      message.getElementsByTagName("h3")[0].textContent = "UNO!";
    if (state.cards.length === 0)
      message.getElementsByTagName("h3")[0].textContent = "You Win!";

    // console.log(state);
    renderStack();
    updateAndRenderMyCards();
  }
});
