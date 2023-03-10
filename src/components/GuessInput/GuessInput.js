import React, { useState, useEffect, useRef } from "react";

function GuessInput({ handleSubmitGuess, status }) {
  const [guess, setGuess] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(event) {
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
