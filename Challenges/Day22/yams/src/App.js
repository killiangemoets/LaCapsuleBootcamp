// import logo from "./logo.svg";
import Dice from "./components/dice.jsx";
import "./App.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCirlceArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faCirlceArrowLeft } from "@fortawesome/free-regular-svg-icons";

const numDices = 5;
let diceValues = [];
for (let i = 0; i < numDices; i++) {
  diceValues.push(Math.trunc(Math.random() * 6) + 1);
}

function App() {
  return (
    <div className="container">
      <header>
        <button className="btn btn--return">
          {/* <FontAwesomeIcon className="star-icon" icon={faCirlceArrowLeft} /> */}
        </button>
        <div className="total-scores">
          <div className="total-score">
            <h6 className="player-num">Player 1</h6>
            <h3 className="player-score">23</h3>
          </div>
          <div className="total-score leader">
            <h6 className="player-num">Player 2</h6>
            <h3 className="player-score">48</h3>
          </div>
          <div className="total-score">
            <h6 className="player-num">Player 3</h6>
            <h3 className="player-score">16</h3>
          </div>
          <div className="total-score">
            <h6 className="player-num">Player 4</h6>
            <h3 className="player-score">4</h3>
          </div>
          <div className="total-score">
            <h6 className="player-num">Player 5</h6>
            <h3 className="player-score">42</h3>
          </div>
        </div>

        <button className="btn btn--instruction">
          {/* <FontAwesomeIcon className="star-icon" icon={faCirlceArrowLeft} /> */}
        </button>
      </header>
      <main>
        <section className="title-section">
          <h1 className="player-title">Player 1</h1>
        </section>
        <section className="possibilities-section">
          <div className="numbers">
            <div className="number">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
            <div className="number">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
            <div className="number">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
            <div className="number">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
          </div>
          <div className="combinations">
            <div className="combination">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
            <div className="combination">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
            <div className="combination">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
            <div className="combination">
              <div className="icon"></div>
              <div className="score"></div>
            </div>
          </div>
        </section>
        <section className="dices-section">
          <Dice diceValues={diceValues} />
        </section>
        <section className="buttons-section">
          <button className="btn btn--roll">
            Roll <span className="num-roll">3</span>
          </button>
          <button className="btn btn--play">Play</button>
        </section>
      </main>
    </div>
  );
}

export default App;
