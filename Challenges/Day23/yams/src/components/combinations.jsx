import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Combinations() {
  return (
    <>
      <div className="combination">
        <div className="icon bg-white times">3X</div>
        <div className="score">1</div>
      </div>
      <div className="combination">
        <div className="icon bg-white times">4X</div>
        <div className="score">24</div>
      </div>
      <div className="combination">
        <div className="icon bg-white">
          <FontAwesomeIcon className="house-icon" icon={faHouse} />
        </div>
        <div className="score"></div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Small Straigth</div>
        <div className="score">8</div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Large Straigth</div>
        <div className="score"></div>
      </div>
      <div className="combination">
        <div className="icon bg-white yahtzee">YAHTZEE</div>
        <div className="score">50</div>
      </div>
      <div className="combination">
        <div className="icon bg-white text">Chance</div>
        <div className="score"></div>
      </div>
    </>
  );
}
