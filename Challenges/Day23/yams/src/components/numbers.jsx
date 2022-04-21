import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

export default function Combinations(props) {
  return (
    <>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceOne} />
        </div>
        <div
          className="score one"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.one)
          }
        >
          {props.possibleScores.one}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceTwo} />
        </div>
        <div
          className="score two"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.two)
          }
        >
          {props.possibleScores.two}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceThree} />
        </div>
        <div
          className="score three"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.three)
          }
        >
          {props.possibleScores.three}
        </div>
      </div>
      <div className="number">
        <div className="icon four">
          <FontAwesomeIcon className="dice-icon" icon={faDiceFour} />
        </div>
        <div
          className="score four"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.four)
          }
        >
          {props.possibleScores.four}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceFive} />
        </div>
        <div
          className="score five"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.five)
          }
        >
          {props.possibleScores.five}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceSix} />
        </div>
        <div
          className="score six"
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.six)
          }
        >
          {props.possibleScores.six}
        </div>
      </div>
      <div className="number">
        <div className="icon bg-white text">
          <p>Bonus</p>
          <p className="bonus-value">+35</p>
        </div>
        <div className="bonus"></div>
      </div>
    </>
  );
}
