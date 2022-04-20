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

export default function Combinations() {
  return (
    <>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceOne} />
        </div>
        <div className="score"></div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceTwo} />
        </div>
        <div className="score"></div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceThree} />
        </div>
        <div className="score"></div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceFour} />
        </div>
        <div className="score"></div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceFive} />
        </div>
        <div className="score"></div>
      </div>
      <div className="number">
        <div className="icon">
          <FontAwesomeIcon className="dice-icon" icon={faDiceSix} />
        </div>
        <div className="score"></div>
      </div>
      <div className="number">
        <div className="icon bg-white text">
          <p>Bonus</p>
          <p className="bonus-value">+35</p>
        </div>
        <div className="score"></div>
      </div>
    </>
  );
}
