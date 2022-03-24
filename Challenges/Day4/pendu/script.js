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
  player.textContent = 2;
  state.score = scoreMax;
  score.textContent = state.score;
  scoreSection.classList.add("hidden");
  secretWordSection.classList.add("hidden");
  formSection.classList.remove("remove");
  alphabetSection.classList.add("hidden");
  errorMessage.classList.add("hidden");
  secretWord.innerHTML = "";
};
init();

const player2 = {
  _renderSecreteWorld() {
    state.secretWord.split("").forEach((letter) => {
      //   console.log(letter);
      const markup = `
      <li class="letter"></li>
      `;
      secretWord.insertAdjacentHTML("beforeend", markup);
    });
  },

  play() {
    if (input.value === "") return;
    var letters = /^[A-Za-z]+$/;
    if (!input.value.match(letters)) {
      errorMessage.classList.remove("hidden");
      return;
    }
    errorMessage.classList.add("hidden");
    state.secretWord = input.value.toUpperCase();
    input.value = "";
    formSection.classList.add("remove");
    scoreSection.classList.remove("hidden");
    secretWordSection.classList.remove("hidden");
    alphabetSection.classList.remove("hidden");
    this._renderSecreteWorld();
    player.textContent = 1;
  },
};

const player1 = {
  _updateSecretWorld(letterPositions) {
    state.secretWord.split("").forEach((letter, index) => {
      //   console.log(letter);
      const markup = `
        <li class="letter"></li>
        `;
      secretWord.insertAdjacentHTML("beforeend", markup);
    });
  },

  play(letter) {
    console.log(state.secretWord);
    const letterPositions = [];
    state.secretWord.split("").forEach((secretLetter, index) => {
      if (secretLetter === letter) {
        letterPositions.push(index);
      }
      //    this.updateSecretWorld();
    });
    console.log(letterPositions);
    if (letterPositions.length === 0) {
      state.score--;
      score.textContent = state.score;
      return;
    }
    this._updateSecretWorld(letterPositions);
  },
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  player2.play();
});

alphabetSection.addEventListener("click", function (e) {
  const letterEl = e.target.closest(".alphabet--letter");
  if (!letterEl || letterEl.classList.contains("desactivate")) return;
  letterEl.classList.add("desactivate");
  const letter = letterEl.dataset.letter;
  player1.play(letter);
});
