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
  round: 1,
  currentPlayer: 0, // Starts at 0 /!\
  numPlayers: 2, // Starts at 1 /!\
  scores: [0, 0],
  gameBoards: [],
  currentDices: [],
  blockDices: [],
  rollsCount: 3,
  possibilities: {
    numbers: {},
    combinations: {},
  },
  selectedPossibility: {
    value: 0,
    type: "",
  },
};

export const restartRollsCount = function () {
  state.rollsCount = 3;
};

export const clearDices = function () {
  state.currentDices = [];
  state.blockDices = [];
  // state.possibilities:
};

export const clearPossibilities = function () {
  state.possibilities = {
    numbers: {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      bonus: "",
    },
    combinations: {
      threeTimes: "",
      fourTimes: "",
      fullHouse: "",
      smallStraigth: "",
      largeStraigth: "",
      yahtzee: "",
      chance: "",
    },
  };
};
export const updateGameBoard = function () {
  state.gameBoards[state.currentPlayer][state.selectedPossibility.type] = {
    alreadyPlayed: true,
    score: state.selectedPossibility.value,
  };
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

export const updateSelectedPossibility = function (value, type) {
  state.selectedPossibility.value = value;
  state.selectedPossibility.type = type;
};

export const updateScoreCurrentPlayer = function () {
  state.scores[state.currentPlayer] += state.selectedPossibility.value;
};

export const nextPlayer = function () {
  if (state.currentPlayer < state.numPlayers - 1) state.currentPlayer++;
  else {
    state.round++;
    state.currentPlayer = 0;
  }
  if (state.round > 13) {
    state.gameState = 1;
    console.log("END OF THE GAME!");
  }
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

const createGameBoards = function () {
  for (let i = 0; i < state.numPlayers; i++) {
    state.gameBoards.push({
      one: {
        alreadyPlayed: false,
        score: 0,
      },
      two: {
        alreadyPlayed: false,
        score: 0,
      },
      three: {
        alreadyPlayed: false,
        score: 0,
      },
      four: {
        alreadyPlayed: false,
        score: 0,
      },
      five: {
        alreadyPlayed: false,
        score: 0,
      },
      six: {
        alreadyPlayed: false,
        score: 0,
      },
      bonus: {
        alreadyPlayed: false,
        score: 0,
      },
      threeTimes: {
        alreadyPlayed: false,
        score: 0,
      },
      fourTimes: {
        alreadyPlayed: false,
        score: 0,
      },
      fullHouse: {
        alreadyPlayed: false,
        score: 0,
      },
      smallStraigth: {
        alreadyPlayed: false,
        score: 0,
      },
      largeStraigth: {
        alreadyPlayed: false,
        score: 0,
      },
      yahtzee: {
        alreadyPlayed: false,
        score: 0,
      },
      chance: {
        alreadyPlayed: false,
        score: 0,
      },
    });
  }
};
createGameBoards();
