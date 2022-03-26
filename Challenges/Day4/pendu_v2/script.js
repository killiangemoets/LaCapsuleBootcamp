const alphabet = String.fromCharCode(...Array(123).keys())
  .slice(97)
  .toUpperCase()
  .split("");

const scoreMax = 6;

const playerSection = document.querySelector(".player-box");
const scoreSection = document.querySelector(".hangman-box");
const secretWordSection = document.querySelector(".secret-word-box");
const formSection = document.querySelector(".word-form-box");
const alphabetSection = document.querySelector(".alphabet-box");
const playAgainSection = document.querySelector(".play-again-box");
const errorMessage = document.querySelector(".error-message");
const alphabetList = document.querySelector(".alphabet");
const player = document.querySelector(".player").querySelector("span");
const hangman = document.querySelectorAll(".hangman");

const winner = document.querySelector(".winner").querySelector("span");
const secretWord = document.querySelector(".secret-word");
const addBtn = document.querySelector("#btn--word");
const playAgainBtn = document.querySelector("#btn--play-again");
const input = document.querySelector("#input-word");

const state = {
  gameState: 0,
  secretWord: "",
  score: 0,
  foundLetters: [],
};

const createAlphabetSection = function () {
  alphabetList.innerHTML = "";
  let markup = "";
  alphabet.forEach((letter) => {
    markup += `
        <li class="alphabet--letter" data-letter="${letter}">${letter}</li>
        `;
  });
  alphabetList.innerHTML = markup;
};

const init = function () {
  createAlphabetSection();
  player.textContent = 1;
  state.score = 0;
  scoreSection.classList.add("hidden");
  hangman.forEach((el) => el.classList.add("hidden"));
  secretWordSection.classList.add("hidden");
  formSection.classList.remove("remove");
  alphabetSection.classList.add("hidden");
  playAgainSection.classList.add("hidden");
  errorMessage.classList.add("hidden");
};
init();

const renderSecreteWorld = function () {
  secretWord.innerHTML = "";
  state.foundLetters.forEach((letter) => {
    const markup = `
      <li class="letter">${letter}</li>
      `;
    secretWord.insertAdjacentHTML("beforeend", markup);
  });
};

const renderPlayAgainMenu = function (winnerNum) {
  winner.textContent = winnerNum;
  playAgainSection.classList.remove("hidden");
};

const player1play = function () {
  if (input.value === "") return;
  var letters = /^[A-Za-z]+$/;
  if (!input.value.match(letters)) {
    errorMessage.classList.remove("hidden");
    return;
  }
  state.secretWord = input.value.toUpperCase().split("");
  state.foundLetters = Array(state.secretWord.length).fill("");
  input.value = "";
  formSection.classList.add("remove");
  scoreSection.classList.remove("hidden");
  secretWordSection.classList.remove("hidden");
  alphabetSection.classList.remove("hidden");
  player.textContent = 2;
  renderSecreteWorld();
};

const player2play = function (letter) {
  if (state.secretWord.indexOf(letter) === -1) {
    hangman[state.score].classList.remove("hidden");
    state.score++;
    if (state.score === scoreMax) {
      state.gameState = 1;
      renderPlayAgainMenu(1);
    }
    return;
  }

  state.secretWord.forEach((secretLetter, i) => {
    if (secretLetter === letter) {
      state.foundLetters[i] = letter;
    }
  });

  renderSecreteWorld();

  if (state.foundLetters.indexOf("") === -1) {
    state.gameState = 1;
    renderPlayAgainMenu(2);
  }
};

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  player1play();
});

playAgainBtn.addEventListener("click", function (e) {
  e.preventDefault();
  state.gameState = 0;
  init();
});

alphabetSection.addEventListener("click", function (e) {
  const letterEl = e.target.closest(".alphabet--letter");
  if (
    !letterEl ||
    letterEl.classList.contains("desactivate") ||
    state.gameState === 1
  )
    return;
  letterEl.classList.add("desactivate");
  const letter = letterEl.dataset.letter;
  player2play(letter);
});
