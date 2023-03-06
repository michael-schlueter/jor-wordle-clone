import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [status, setStatus] = useState("running");
  const [answer, setAnswer] = useState(() => sample(WORDS));

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    checkWin(guess, answer, nextGuesses);
    console.log(guesses.length)
  }

  function checkWin(guess, answer, nextGuesses) {
    
    if (guess === answer) {
      setStatus("won");
      return;
    }
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
      return;
    }
    setStatus("running");
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setStatus('running');
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      {status === "won" && <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart} /> }
      {status === "lost" && <LostBanner answer={answer} handleRestart={handleRestart} />}
    </>
  );
}

export default Game;
