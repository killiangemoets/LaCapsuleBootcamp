// CONFIGURATION
const numDices = 5;

export const state = {
  gameState: 0, // 0 for game on, 1 for game over
  round: 13,
  currentPlayer: 1,
  numPlayers: 3,
  scores: [20, 12, 34],
  gameBoards: [],
  currentDices: [],
  rollsCount: 3,
};

export const rollTheDices = function () {
  state.currentDices = [];
  for (let i = 0; i < numDices; i++) {
    state.currentDices.push(Math.trunc(Math.random() * 6) + 1);
  }
  return state.currentDices;
};

export const decreaseRollCount = function () {
  if (state.rollsCount > 0) state.rollsCount--;
  return state.rollsCount;
};

// const gameBoard = {
//   one: "",
//   two: "",
//   three: "",
//   four: "",
//   five: "",
//   six: "",
//   bonus: "",
//   threeTimes: "",
//   fourTimes: "",
//   home: "",
//   smallStraigth: "",
//   largeStraigth: "",
//   yahtzee: "",
//   chance: "",
// };
