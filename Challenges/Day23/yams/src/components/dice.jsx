import React, { useState } from "react";
import * as modele from "../components/modele";

export default function Dice(props) {
  const [blockDices, setBlockDices] = useState([]);
  const handleBlockDice = function (i) {
    setBlockDices([...modele.blockADice(i)]);
  };

  const renderDices = function (values) {
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
          onClick={() => handleBlockDice(i)}
        />
      );
    });

    return dices;
  };
  return renderDices(props.diceValues);
}
