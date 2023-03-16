import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { GuessResult } from "../../game-helpers";

interface GuessListProps {
  checkedGuesses: (GuessResult[] | null)[];
}

function GuessList({ checkedGuesses }: GuessListProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={checkedGuesses[num]} />
      ))}
    </div>
  );
}

export default GuessList;
