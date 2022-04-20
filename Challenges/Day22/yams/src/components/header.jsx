import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <button className="btn--top btn--return">
        <FontAwesomeIcon className="header-icon" icon={faCircleArrowLeft} />
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

      <button className="btn--top btn--instruction">
        <FontAwesomeIcon className="header-icon" icon={faCircleInfo} />
      </button>
    </>
  );
}
