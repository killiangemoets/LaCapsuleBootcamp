import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Combinations(props) {
  return (
    <>
      <div className="combination">
        <div className="icon bg-white times">3X</div>
        <div
          className="score threeTimes"
          data-value={props.possibleScores.threeTimes}
        >
          {props.possibleScores.threeTimes}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white times">4X</div>
        <div
          className="score fourTimes"
          data-value={props.possibleScores.fourTimes}
        >
          {props.possibleScores.fourTimes}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white">
          <FontAwesomeIcon className="house-icon" icon={faHouse} />
        </div>
        <div
          className="score fullHouse"
          data-value={props.possibleScores.fullHouse}
        >
          {props.possibleScores.fullHouse}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Small Straigth</div>
        <div
          className="score smallStraigth"
          data-value={props.possibleScores.smallStraigth}
        >
          {props.possibleScores.smallStraigth}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Large Straigth</div>
        <div
          className="score largeStraigth"
          data-value={props.possibleScores.largeStraigth}
        >
          {props.possibleScores.largeStraigth}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white yahtzee">YAHTZEE</div>
        <div
          className="score yahtzee"
          data-value={props.possibleScores.yahtzee}
        >
          {props.possibleScores.yahtzee}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Chance</div>
        <div className="score chance" data-value={props.possibleScores.chance}>
          {props.possibleScores.chance}
        </div>
      </div>
    </>
  );
}
