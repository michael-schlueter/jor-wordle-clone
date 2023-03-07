import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

// Transformieren in ein Objekt was den Status für jeden Buchstaben enthält

function Keyboard({ checkedGuesses }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter, index) => (
            <div key={index} className="letter">
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
