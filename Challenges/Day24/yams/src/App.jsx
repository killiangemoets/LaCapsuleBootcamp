import React, { useState } from "react";
import Dice from "./components/dice.jsx";
import Buttons from "./components/buttons";
import Combinations from "./components/combinations";
import Numbers from "./components/numbers";
import Header from "./components/header";
import CurrentPlayer from "./components/currentPlayer";
import StartMenu from "./components/startMenu";
import PauseMenu from "./components/pauseMenu";
import Rules from "./components/rules";
import EndGame from "./components/endGame.jsx";

import * as modele from "./components/modele";
import "./App.css";

function App() {
  const [diceValues, setDiceValues] = useState([]);
  const [rollsCount, setRollsCount] = useState(modele.state.rollsCount);
  const [possibilities, setPossibilities] = useState(
    modele.state.possibilities
  );
  const [scores, setScores] = useState([...modele.state.scores]);
  const [gameBoard, setGameBoard] = useState(
    modele.state.gameBoards[modele.state.currentPlayer]
  );
  const [blockDices, setBlockDices] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(
    modele.state.currentPlayer
  );

  function handleRollDices() {
    if (rollsCount === 0) return;
    document
      .querySelectorAll(".score")
      .forEach((el) => el.classList.remove("selected-possibility"));
    document.querySelector(".btn--play").classList.add("btn--off");
    setDiceValues(modele.rollTheDices());
    setRollsCount(modele.decreaseRollCount());
    modele.calculateNumberPossibilities();
    modele.calculateCombinationPossibilities();
    setPossibilities(modele.state.possibilities);
  }

  function handleSelectPossibility(e, value, type) {
    if (diceValues.length && !e.target.classList.contains("previous-score")) {
      modele.updateSelectedPossibility(value, type);
      document
        .querySelectorAll(".score")
        .forEach((el) => el.classList.remove("selected-possibility"));
      e.target.classList.add("selected-possibility");
      document.querySelector(".btn--play").classList.remove("btn--off");
    }
  }

  const handleBlockDice = function (i) {
    setBlockDices([...modele.blockADice(i)]);
  };

  function handlePlay() {
    if (document.querySelector(".btn--play").classList.contains("btn--off"))
      return;
    modele.updateScoreCurrentPlayer();

    modele.updateGameBoard();
    modele.nextPlayer();
    setCurrentPlayer(modele.state.currentPlayer);
    setGameBoard(modele.state.gameBoards[modele.state.currentPlayer]);

    modele.clearDices();
    setDiceValues(modele.state.currentDices);
    setBlockDices(modele.state.blockDices);

    modele.restartRollsCount();
    setRollsCount(modele.state.rollsCount);

    modele.clearPossibilities();
    setPossibilities(modele.state.possibilities);

    document
      .querySelectorAll(".score")
      .forEach((el) => el.classList.remove("selected-possibility"));
    document.querySelector(".btn--play").classList.add("btn--off");
    setDiceValues(modele.state.currentDices);
    setScores([...modele.state.scores]);
  }

  return (
    <>
      <div className="container">
        <header>
          <Header scores={scores} />
        </header>
        <main>
          <section className="title-section">
            <CurrentPlayer currentPlayer={currentPlayer} />
          </section>
          <section className="possibilities-section">
            <div className="numbers">
              <Numbers
                possibleScores={possibilities.numbers}
                handleSelectPossibility={handleSelectPossibility}
                gameBoard={gameBoard}
              />
            </div>
            <div className="combinations">
              <Combinations
                possibleScores={possibilities.combinations}
                handleSelectPossibility={handleSelectPossibility}
                gameBoard={gameBoard}
              />
            </div>
          </section>
          <section className="dices-section">
            <Dice
              diceValues={diceValues}
              handleBlockDice={handleBlockDice}
              blockDices={blockDices}
            />
          </section>
          <section className="buttons-section">
            <Buttons
              rollsCount={rollsCount}
              handleRollDices={handleRollDices}
              handlePlay={handlePlay}
            />
          </section>
        </main>
      </div>
      {/* <StartMenu /> */}
      {/* <PauseMenu /> */}
      {/* <Rules /> */}
      {/* <EndGame /> */}
    </>
  );
}

export default App;
