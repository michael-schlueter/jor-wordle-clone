import React, { useState, useEffect, useRef } from "react";

interface GuessInputProps {
  status: "won" | "lost" | "running";
  handleSubmitGuess: (guess: string) => void;
}

// @ts-ignore
function GuessInput({ handleSubmitGuess, status, handleRestart }: GuessInputProps) {
  const [guess, setGuess] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [handleRestart]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={guess}
        ref={inputRef}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={status === "running" ? false : true}
      />
    </form>
  );
}

export default GuessInput;
