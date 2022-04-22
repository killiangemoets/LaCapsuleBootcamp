import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function StartMenu(props) {
  return (
    <div className="start-menu">
      <div>
        <h1 className="game-title"> Yams</h1>
      </div>
      <div>
        <FontAwesomeIcon className="yams-icon" icon={faDice} />
      </div>
      <div>
        <form className="num-players-form">
          <input
            id="input-num"
            type="number"
            placeholder="Number of players"
            name="number-players"
            value="1"
            min="1"
            // onChange={() => props.handleBlockDice()}
          />
          <button className="btn--num-players">Play</button>
        </form>
      </div>
    </div>
  );
}
