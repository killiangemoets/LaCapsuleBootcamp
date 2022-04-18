// import logo from "./logo.svg";
import Dice from "./components/dice.jsx";
import "./App.css";

const numDices = 5;
let diceValues = [];
for (let i = 0; i < numDices; i++) {
  diceValues.push(Math.trunc(Math.random() * 6) + 1);
}

function App() {
  return (
    <div className="container">
      <header>
        <button>Return</button>
        <h1>Player 1</h1>
        <button>Instructions</button>
      </header>
      <main>
        <section className="title-section">
          <h3 className="title">Player 1</h3>
        </section>
        <section className="possibilites-section">
          <div className="numbers">
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
          </div>
        </section>
        <section className="dices-section">
          <Dice diceValues={diceValues} />
        </section>
        <section className="buttons-section">
          <button>
            Roll <span>3</span>
          </button>
          <button>Play</button>
        </section>
      </main>
      <footer>
        <div className="total-score">
          <h6 className="player-num">Player 1</h6>
          <h3 className="player-score">23</h3>
        </div>
      </footer>
    </div>
  );
}

export default App;
