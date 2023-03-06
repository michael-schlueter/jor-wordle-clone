import React from "react";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

function Keyboard() {
  return (
    <div className="keyboard">
      {ROWS.map((row) => (
        <div className="keyboard-row">
          {row.map((letter) => (
            <div className="letter">{letter}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
