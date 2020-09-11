import React from "react";
import FlipCard from "./FlipCard";

export const FlipCards = () => {
  return (
    <>
      <h3>Flip Card</h3>
      <div className="flex">
        <FlipCard />
        <FlipCard direction="vertical" />
      </div>
    </>
  );
};

export default FlipCards;
