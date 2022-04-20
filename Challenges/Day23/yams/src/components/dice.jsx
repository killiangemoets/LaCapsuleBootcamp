import React, { useState } from "react";
import "./buttons";
import * as modele from "../components/modele";

export default function Dice(props) {
  const [blockDices, setBlockDices] = useState([]);
  const handleBlockDice = function (i) {
    setBlockDices([...modele.blockADice(i)]);
  };
  // console.log(blockDices);
  // console.log(blockDices.find((el) => el === 0));
  const renderDices = function (values) {
    const dices = values.map((value, i) => {
      const dice = `images/dice-${value}.png`;
      return (
        <img
          key={i}
          className={
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
