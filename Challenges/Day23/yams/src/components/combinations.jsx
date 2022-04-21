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
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.threeTimes)
          }
        >
          {props.possibleScores.threeTimes}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white times">4X</div>
        <div
          className="score fourTimes"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.fourTimes)
          }
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
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.fullHouse)
          }
        >
          {props.possibleScores.fullHouse}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Small Straigth</div>
        <div
          className="score smallStraigth"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.smallStraigth)
          }
        >
          {props.possibleScores.smallStraigth}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Large Straigth</div>
        <div
          className="score largeStraigth"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.largeStraigth)
          }
        >
          {props.possibleScores.largeStraigth}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white yahtzee">YAHTZEE</div>
        <div
          className="score yahtzee"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.yahtzee)
          }
        >
          {props.possibleScores.yahtzee}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Chance</div>
        <div
          className="score chance"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.chance)
          }
        >
          {props.possibleScores.chance}
        </div>
      </div>
    </>
  );
}
