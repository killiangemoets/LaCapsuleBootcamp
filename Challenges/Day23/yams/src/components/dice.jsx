import React from "react";
import "./buttons";

export default function Dice(props) {
  const renderDices = function (values) {
    const dices = values.map((value, i) => {
      const dice = `images/dice-${value}.png`;
      return <img key={i} src={dice} className="dice-img" alt="dice" />;
    });

    return dices;
  };
  return renderDices(props.diceValues);
}
