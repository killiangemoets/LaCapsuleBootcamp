const alphabet = String.fromCharCode(...Array(123).keys())
  .slice(97)
  .toUpperCase()
  .split("");

const scoreMax = 10;

const playerSection = document.querySelector(".player-box");
const scoreSection = document.querySelector(".score-box");
const secretWordSection = document.querySelector(".secret-word-box");
const formSection = document.querySelector(".word-form-box");
const alphabetSection = document.querySelector(".alphabet-box");
const errorMessage = document.querySelector(".error-message");
const alphabetList = document.querySelector(".alphabet");
const player = document.querySelector(".player").querySelector("span");
const score = document.querySelector(".score").querySelector("span");
const secretWord = document.querySelector(".secret-word");
const btn = document.querySelector(".btn");
const input = document.querySelector("#input-word");

const state = {
  gameState: 0,
  secretWord: "",
  score: scoreMax,
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
  state.score = scoreMax;
  score.textContent = state.score;
  scoreSection.classList.add("hidden");
  secretWordSection.classList.add("hidden");
  formSection.classList.remove("remove");
  alphabetSection.classList.add("hidden");
  errorMessage.classList.add("hidden");
  // secretWord.innerHTML = "";
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

const player1play = function () {
  if (input.value === "") return;
  var letters = /^[A-Za-z]+$/;
  if (!input.value.match(letters)) {
    errorMessage.classList.remove("hidden");
    return;
  }
  // errorMessage.classList.add("hidden");
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
    state.score--;
    score.textContent = state.score;
    if (state.score === 0) {
      console.log("Player 1 won!");
      state.gameState = 1;
      // TO BE CONTINUED
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
    console.log("Player 2 won!");
    state.gameState = 1;
    // TO BE CONTINUED
  }
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  // if (state.gameState === 1) return;
  player1play();
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
