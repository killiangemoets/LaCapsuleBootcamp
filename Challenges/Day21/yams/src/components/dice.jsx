import React from "react";

const renderDices = function (values) {
  const dices = values.map((value, i) => {
    const dice = `images/dice-${value}.png`;
    return <img key={i} src={dice} className="dice-img" alt="dice" />;
  });

  return dices;
};

export default function Dice(props) {
  return <div className="dices">{renderDices(props.diceValues)}</div>;
}
