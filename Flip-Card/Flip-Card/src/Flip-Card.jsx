/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";

import Card from "./Card";

function FlipCard({ card, getCard, isMatched }) {
  const [isCardFlip, setIsCardFlip] = useState(false);
  
useEffect(() => {
  // If the cards don't match, reset the flip state
  if (!isMatched) {
    setIsCardFlip(false); // Flip back to the front
  }
}, [isMatched]);
                                            

  // eslint-disable-next-line no-unused-vars
  function rotateCard(id) {
    
    setIsCardFlip((prevValue) => !prevValue);

  

  }
  return (
    <Card card={card} rotateCard={rotateCard} isCardFlip={isCardFlip} getCard={getCard} isMatched={isMatched} />
  );
}

export default FlipCard;

// flipCardwalifile