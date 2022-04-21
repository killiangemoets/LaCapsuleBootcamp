import React from "react";

export default function Buttons(props) {
  return (
    <>
      <button className="btn btn--roll" onClick={() => props.handleRollDices()}>
        Roll <span className="num-roll">{props.rollsCount}</span>
      </button>
      <button
        className="btn btn--play btn--off"
        onClick={() => props.handlePlay()}
      >
        Play
      </button>
    </>
  );
}
