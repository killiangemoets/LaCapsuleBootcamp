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
          className={
            props.gameBoard.one.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.one, "one")
          }
        >
          {props.gameBoard.one.alreadyPlayed === false
            ? props.possibleScores.one
            : props.gameBoard.one.score}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceTwo} />
        </div>
        <div
          className={
            props.gameBoard.two.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.two, "two")
          }
        >
          {props.gameBoard.two.alreadyPlayed === false
            ? props.possibleScores.two
            : props.gameBoard.two.score}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceThree} />
        </div>
        <div
          className={
            props.gameBoard.three.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.three,
              "three"
            )
          }
        >
          {props.gameBoard.three.alreadyPlayed === false
            ? props.possibleScores.three
            : props.gameBoard.three.score}
        </div>
      </div>
      <div className="number">
        <div className="icon four">
          <FontAwesomeIcon className="dice-icon" icon={faDiceFour} />
        </div>
        <div
          className={
            props.gameBoard.four.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.four, "four")
          }
        >
          {props.gameBoard.four.alreadyPlayed === false
            ? props.possibleScores.four
            : props.gameBoard.four.score}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceFive} />
        </div>
        <div
          className={
            props.gameBoard.five.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.five, "five")
          }
        >
          {props.gameBoard.five.alreadyPlayed === false
            ? props.possibleScores.five
            : props.gameBoard.five.score}
        </div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceSix} />
        </div>
        <div
          className={
            props.gameBoard.six.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(e, props.possibleScores.six, "six")
          }
        >
          {props.gameBoard.six.alreadyPlayed === false
            ? props.possibleScores.six
            : props.gameBoard.six.score}
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
