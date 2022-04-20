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
  const [diceValues, setDiceValues] = useState(modele.rollTheDices());
  const [rollsCount, setRollsCount] = useState(modele.state.rollsCount);

  function handlerClickButtonsSection(e) {
    const btn = e.target.closest(".btn");

    if (!btn) return;
    if (btn.classList.contains("btn--roll")) {
      if (rollsCount === 0) return;
      setDiceValues(modele.rollTheDices());
      setRollsCount(modele.decreaseRollCount());
      console.log(rollsCount);
    }
    if (btn.classList.contains("btn--play")) {
      console.log("Play");
    }
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
            <Numbers />
          </div>
          <div className="combinations">
            <Combinations />
          </div>
        </section>
        <section className="dices-section">
          <Dice diceValues={diceValues} />
        </section>
        <section
          className="buttons-section"
          onClick={(e) => handlerClickButtonsSection(e)}
        >
          <Buttons rollsCount={rollsCount} />
        </section>
      </main>
    </div>
  );
}

export default App;
