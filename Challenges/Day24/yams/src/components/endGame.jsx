import React from "react";

export default function EndGame(props) {
  return (
    <div className="start-menu">
      <div>
        <h1 className="game-title">Players 1 Win !</h1>
      </div>
      <div>
        <h1>SCORES</h1>
      </div>
      <div>
        <button className="btn--num-players">Back to Menu</button>
      </div>
    </div>
  );
}
