import React from "react";

interface KeyBoardProps {
  checkedGuesses: ({
    letter: string;
    status: string;
}[] | null)[]
}

const ROWS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

// @ts-ignore
function getStatusByLetter(checkedGuesses) {
  let statusObj = {};

  // @ts-ignore
  checkedGuesses.forEach((guess) => {
    // @ts-ignore
    guess.forEach(({ letter, status }) => {
      // @ts-ignore
      statusObj[letter] = status;
    });
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
            // @ts-ignore
            <div key={index} className={`letter ${statusByLetter[letter]}`}>
              {/* @ts-ignore */}
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
