import React from "react";

export default function CurrentPlayer(props) {
  return (
    <>
      <h1 className="player-title">Player {props.currentPlayer + 1}</h1>
    </>
  );
}
