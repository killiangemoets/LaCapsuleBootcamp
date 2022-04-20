import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Combinations(props) {
  return (
    <>
      <div className="combination">
        <div className="icon bg-white times">3X</div>
        <div className="score">{props.possibleScores.threeTimes}</div>
      </div>
      <div className="combination">
        <div className="icon bg-white times">4X</div>
        <div className="score">{props.possibleScores.fourTimes}</div>
      </div>
      <div className="combination">
        <div className="icon bg-white">
          <FontAwesomeIcon className="house-icon" icon={faHouse} />
        </div>
        <div className="score">{props.possibleScores.fullHouse}</div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Small Straigth</div>
        <div className="score">{props.possibleScores.smallStraigth}</div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Large Straigth</div>
        <div className="score">{props.possibleScores.largeStraigth}</div>
      </div>
      <div className="combination">
        <div className="icon bg-white yahtzee">YAHTZEE</div>
        <div className="score">{props.possibleScores.yahtzee}</div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Chance</div>
        <div className="score">{props.possibleScores.chance}</div>
      </div>
    </>
  );
}
