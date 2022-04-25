import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function StartMenu(props) {
  return (
    <div className="background-menu">
      <div className="start-menu">
        <div>
          <h1 className="game-title"> Yams</h1>
        </div>
        <div>
          <FontAwesomeIcon className="yams-icon" icon={faDice} />
        </div>
        <div>
          <h3 className="num-players-title">How many players want to play?</h3>
          <div className="num-players-buttons">
            <button className="btn--num-players">1</button>
            <button className="btn--num-players">2</button>
            <button className="btn--num-players">3</button>
            <button className="btn--num-players">4</button>
          </div>
        </div>
      </div>
    </div>
  );
}
