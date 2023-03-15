import React from "react";

interface KeyBoardProps {
  checkedGuesses: ({
    letter: string;
    status: string;
}[] | null)[]
}

type CheckedGuesses = ({
  letter: string;
  status: string;
}[] | null)[]

interface StatusObject {
  [character: string]: string;
}

const ROWS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(checkedGuesses: CheckedGuesses) {
  let statusObj = {} as StatusObject;

  checkedGuesses.forEach((guess) => {
    if (guess) {
      guess.forEach(({ letter, status }) => {
        statusObj[letter] = status;
      });
    } else {
      return;
    }
  });
  return statusObj;
};

function Keyboard({ checkedGuesses }: KeyBoardProps) {
  let statusByLetter = getStatusByLetter(checkedGuesses);
  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter, index) => (
            <div key={index} className={`letter ${statusByLetter[letter]}`}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
