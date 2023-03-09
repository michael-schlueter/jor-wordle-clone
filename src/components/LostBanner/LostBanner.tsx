import React from "react";
import Banner from "../Banner/Banner";

interface LostBannerProps {
  answer: string;
  handleRestart: () => void;
}

function LostBanner({ answer, handleRestart }: LostBannerProps) {
  return (
    <Banner status="sad" action={handleRestart} actionText="Restart game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
