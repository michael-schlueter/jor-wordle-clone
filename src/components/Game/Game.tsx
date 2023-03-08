import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [status, setStatus] = useState<"running" | "won" | "lost">("running");
  const [answer, setAnswer] = useState<string>(() => sample(WORDS));

  function handleSubmitGuess(guess: string) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    checkWin(guess, answer, nextGuesses);
  }

  function checkWin(guess: string, answer: string, nextGuesses: string[]) {
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
    setStatus("running");
  }

  const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessList checkedGuesses={checkedGuesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} status={status} />
      <Keyboard checkedGuesses={checkedGuesses} />
      {status === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {status === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
