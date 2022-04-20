import React, { useState } from "react";
import Dice from "./components/dice.jsx";
import Buttons from "./components/buttons";
import Combinations from "./components/combinations";
import Numbers from "./components/numbers";
import Header from "./components/header";
import CurrentPlayer from "./components/currentPlayer";

import * as modele from "./components/modele";
import "./App.css";

function App() {
  const [diceValues, setDiceValues] = useState([]);
  const [rollsCount, setRollsCount] = useState(modele.state.rollsCount);
  const [possibilities, setPossibilities] = useState(
    modele.state.possibilities
  );

  function handleRollDices() {
    if (rollsCount === 0) return;
    setDiceValues(modele.rollTheDices());
    setRollsCount(modele.decreaseRollCount());
    modele.calculateNumberPossibilities();
    modele.calculateCombinationPossibilities();
    setPossibilities(modele.state.possibilities);
  }

  function handlePlay() {
    console.log("Play");
  }

  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main>
        <section className="title-section">
          <CurrentPlayer />
        </section>
        <section className="possibilities-section">
          <div className="numbers">
            <Numbers possibleScores={possibilities.numbers} />
          </div>
          <div className="combinations">
            <Combinations possibleScores={possibilities.combinations} />
          </div>
        </section>
        <section className="dices-section">
          <Dice diceValues={diceValues} />
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
  );
}

export default App;
