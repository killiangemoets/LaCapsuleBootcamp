// CONFIGURATION
const numDices = 5;
const combinationsPoints = {
  threeTimes: 20,
  fourTimes: 30,
  fullHouse: 40,
  smallStraight: 30,
  largeStraight: 40,
  yahtzee: 50,
};

export const state = {
  gameState: 0, // 0 for game on, 1 for game over
  round: 13,
  currentPlayer: 1,
  numPlayers: 3,
  scores: [0, 0, 0],
  gameBoards: [],
  currentDices: [],
  blockDices: [],
  rollsCount: 3,
  possibilities: {
    numbers: {},
    combinations: {},
  },
  selectedPossibility: -1,
};

export const rollTheDices = function () {
  // state.currentDices = [];

  for (let i = 0; i < numDices; i++) {
    if (!state.blockDices.filter((el) => el === i).length)
      state.currentDices[i] = Math.trunc(Math.random() * 6) + 1;
  }
  return state.currentDices;
};

export const decreaseRollCount = function () {
  if (state.rollsCount > 0) state.rollsCount--;
  return state.rollsCount;
};

export const blockADice = function (index) {
  // We can't use a find method bc return null when i=0

  if (!state.blockDices.filter((el) => el === index).length) {
    state.blockDices.push(index);
  } else {
    state.blockDices = state.blockDices.filter((el) => el !== index);
  }
  return state.blockDices;
};

export const updateSelectedPossibility = function (score) {
  state.selectedPossibility = score;
  console.log(state.selectedPossibility);
  return state.selectedPossibility;
};

export const calculateNumberPossibilities = function () {
  state.possibilities.numbers = {};

  state.possibilities.numbers.one =
    state.currentDices.filter((dice) => dice === 1).length * 1;

  state.possibilities.numbers.two =
    state.currentDices.filter((dice) => dice === 2).length * 2;

  state.possibilities.numbers.three =
    state.currentDices.filter((dice) => dice === 3).length * 3;

  state.possibilities.numbers.four =
    state.currentDices.filter((dice) => dice === 4).length * 4;

  state.possibilities.numbers.five =
    state.currentDices.filter((dice) => dice === 5).length * 5;

  state.possibilities.numbers.six =
    state.currentDices.filter((dice) => dice === 6).length * 6;
};

export const calculateCombinationPossibilities = function () {
  state.possibilities.combinations = {};

  const threeFourYahtzeeOrFullHouseScores = calculateThreeFourYahtzeeScores();
  const straightscores = calculateStraigthsScores();

  state.possibilities.combinations.threeTimes =
    threeFourYahtzeeOrFullHouseScores.three;

  state.possibilities.combinations.fourTimes =
    threeFourYahtzeeOrFullHouseScores.four;

  state.possibilities.combinations.fullHouse =
    threeFourYahtzeeOrFullHouseScores.fullHouse;

  state.possibilities.combinations.smallStraigth = straightscores.small;

  state.possibilities.combinations.largeStraigth = straightscores.large;

  state.possibilities.combinations.yahtzee =
    threeFourYahtzeeOrFullHouseScores.yahtzee;

  state.possibilities.combinations.chance = state.currentDices.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
};

const calculateThreeFourYahtzeeScores = function () {
  let eachNumber = [];
  const threeFourYahtzeeOrFullhouse = {
    three: 0,
    four: 0,
    yahtzee: 0,
    fullHouse: 0,
  };
  eachNumber.push(state.currentDices.filter((dice) => dice === 1).length);
  eachNumber.push(state.currentDices.filter((dice) => dice === 2).length);
  eachNumber.push(state.currentDices.filter((dice) => dice === 3).length);
  eachNumber.push(state.currentDices.filter((dice) => dice === 4).length);
  eachNumber.push(state.currentDices.filter((dice) => dice === 5).length);
  eachNumber.push(state.currentDices.filter((dice) => dice === 6).length);

  if (eachNumber.find((el) => el >= 3))
    threeFourYahtzeeOrFullhouse.three = combinationsPoints.threeTimes;
  if (eachNumber.find((el) => el >= 4))
    threeFourYahtzeeOrFullhouse.four = combinationsPoints.fourTimes;
  if (eachNumber.find((el) => el >= 5))
    threeFourYahtzeeOrFullhouse.yahtzee = combinationsPoints.yahtzee;
  if (eachNumber.find((el) => el === 3) && eachNumber.find((el) => el === 2))
    threeFourYahtzeeOrFullhouse.fullHouse = combinationsPoints.fullHouse;

  return threeFourYahtzeeOrFullhouse;
};

const calculateStraigthsScores = function () {
  const dices = [...state.currentDices];
  const straightsScores = {
    small: 0,
    large: 0,
  };
  const smallStraightPossibilities = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
  ];
  const largeStraightPossibilities = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
  ];

  smallStraightPossibilities.forEach((smallStraightPossibility) => {
    const containsAll = smallStraightPossibility.every((element) => {
      return dices.includes(element);
    });
    if (containsAll) straightsScores.small = combinationsPoints.smallStraight;
  });

  largeStraightPossibilities.forEach((largeStraightPossibility) => {
    const containsAll = largeStraightPossibility.every((element) => {
      return dices.includes(element);
    });
    if (containsAll) straightsScores.large = combinationsPoints.largeStraight;
  });

  return straightsScores;
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
