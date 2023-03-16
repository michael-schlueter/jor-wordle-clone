import React from "react";
import { range } from "../../utils";

interface CellProps {
  letter: string | undefined;
  status: 'correct' | 'incorrect' | 'misplaced' | undefined;
}

function Cell({ letter, status }: CellProps) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

interface GuessProps {
  value: ({
    letter: string;
    status: 'correct' | 'incorrect' | 'misplaced';
}[] | null)
}


function Guess({ value }: GuessProps) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num].letter : undefined}
          status={value ? value[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
