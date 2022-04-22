import React from "react";

export default function Dice(props) {
  const renderDices = function (values, blockDices) {
    const dices = values.map((value, i) => {
      const dice = `images/dice-${value}.png`;
      return (
        <img
          key={i}
          className={
            // We can't use a find method bc return null when i=0
            blockDices.filter((el) => el === i).length
              ? "dice-img block-dice"
              : "dice-img"
          }
          src={dice}
          alt="dice"
          onClick={() => props.handleBlockDice(i)}
        />
      );
    });

    return dices;
  };
  return renderDices(props.diceValues, props.blockDices);
}
