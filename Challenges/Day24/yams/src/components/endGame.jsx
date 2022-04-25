import React from "react";

export default function EndGame(props) {
  return (
    <div className="background-menu">
      <div className="start-menu">
        <div>
          <h1 className="winner-title">Player 1 Win!</h1>
        </div>
        <div className="all-scores">
          <div className="one-score">
            <h6 className="player--num">Player 1</h6>
            <h3 className="player--score">20</h3>
          </div>
          <div className="one-score">
            <h6 className="player--num">Player 2</h6>
            <h3 className="player--score">128</h3>
          </div>
          <div className="one-score">
            <h6 className="player--num">Player 3</h6>
            <h3 className="player--score">8</h3>
          </div>
        </div>
        <div>
          <button className="btn--num-players">Back to Menu</button>
        </div>
      </div>
    </div>
  );
}
