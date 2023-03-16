import React from "react";
import Banner from "../Banner/Banner";

interface WonBannerProps {
  numOfGuesses: number;
  handleRestart: () => void;
}

function WonBanner({ numOfGuesses, handleRestart }: WonBannerProps) {
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart game">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses > 1 ? `${numOfGuesses} guesses` : "1 guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
