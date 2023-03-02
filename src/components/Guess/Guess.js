import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {

  const checkedGuesses = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={value ? `cell ${checkedGuesses[num].status}` : 'cell'}>
          {value ? checkedGuesses[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
