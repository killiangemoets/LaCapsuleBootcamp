import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Combinations(props) {
  return (
    <>
      <div className="combination">
        <div className="icon bg-white times">3X</div>
        <div
          className={
            props.gameBoard.threeTimes.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.threeTimes,
              "threeTimes"
            )
          }
        >
          {props.gameBoard.threeTimes.alreadyPlayed === false
            ? props.possibleScores.threeTimes
            : props.gameBoard.threeTimes.score}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white times">4X</div>
        <div
          className={
            props.gameBoard.fourTimes.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.fourTimes,
              "fourTimes"
            )
          }
        >
          {props.gameBoard.fourTimes.alreadyPlayed === false
            ? props.possibleScores.fourTimes
            : props.gameBoard.fourTimes.score}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white">
          <FontAwesomeIcon className="house-icon" icon={faHouse} />
        </div>
        <div
          className={
            props.gameBoard.fullHouse.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.fullHouse,
              "fullHouse"
            )
          }
        >
          {props.gameBoard.fullHouse.alreadyPlayed === false
            ? props.possibleScores.fullHouse
            : props.gameBoard.fullHouse.score}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Small Straigth</div>
        <div
          className={
            props.gameBoard.smallStraigth.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.smallStraigth,
              "smallStraigth"
            )
          }
        >
          {props.gameBoard.smallStraigth.alreadyPlayed === false
            ? props.possibleScores.smallStraigth
            : props.gameBoard.smallStraigth.score}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Large Straigth</div>
        <div
          className={
            props.gameBoard.largeStraigth.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.largeStraigth,
              "largeStraigth"
            )
          }
        >
          {props.gameBoard.largeStraigth.alreadyPlayed === false
            ? props.possibleScores.largeStraigth
            : props.gameBoard.largeStraigth.score}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white yahtzee">YAHTZEE</div>
        <div
          className={
            props.gameBoard.yahtzee.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.yahtzee,
              "yahtzee"
            )
          }
        >
          {props.gameBoard.yahtzee.alreadyPlayed === false
            ? props.possibleScores.yahtzee
            : props.gameBoard.yahtzee.score}
        </div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Chance</div>
        <div
          className={
            props.gameBoard.chance.alreadyPlayed === false
              ? "score"
              : "score previous-score"
          }
          onClick={(e) =>
            props.handleSelectPossibility(
              e,
              props.possibleScores.chance,
              "chance"
            )
          }
        >
          {props.gameBoard.chance.alreadyPlayed === false
            ? props.possibleScores.chance
            : props.gameBoard.chance.score}
        </div>
      </div>
    </>
  );
}
