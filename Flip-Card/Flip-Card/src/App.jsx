import { useState, useEffect } from "react";
import { data } from "./data";
import "./App.css";
import FlipCard from "./Flip-Card";

function App() {
  const [existing, setExisting] = useState([]);
  const [startGame, setStartGame] = useState(false);
  
  const [flippedCards, setFlippedCards] = useState([]);
  const [cardCount, setcardCount] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [matchedCards, setMatchedCards] = useState([]);
  const [isMatched,setIsMatched]=useState(false);


  function randomize(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push(getARandomValue(arr.length, temp));
    }

    let i = 0;
    let finalTemp = [];
    while (i < temp.length) {
      finalTemp.push(data[temp[i]]);
      i++;
    }
    setExisting([...existing, ...finalTemp]);
  }

  function getARandomValue(len, temp) {
    const randomValue = Math.floor(Math.random() * len);
    if (temp.includes(randomValue)) return getARandomValue(len, temp);
    else {
      return randomValue;
    }
  }

  useEffect(() => {
    randomize(data);
  }, []);


  function getCard(src) {
    // setFlippedCards((prevFlippedCards) => {
    //         const updatedFlippedCards = [...prevFlippedCards, src];
            setcardCount((prevCount) => prevCount + 1);
    //         console.log(updatedFlippedCards); 
    //         return updatedFlippedCards;
    //       });
    setFlippedCards([...flippedCards, src]);

    
  }
  
 

  useEffect(() => {
    if (flippedCards.length === 2) {
      matchingCards();
    }
  }, [flippedCards]);

  function matchingCards() {
    if (flippedCards[0] === flippedCards[1]) {
      setMatchedCards(prev => [...prev, flippedCards[0]]);
      setIsMatched(true);
      console.log("done");
       // If matched, flip both cards back
    } else {
      setIsMatched(false);
      console.log("Notdone");

    }
    // Reset flipped cards after checking
    
      setFlippedCards([]); // Reset flipped cards
    
  }

  
  

  return (
    <>
          
      <div id="intro">
        <h1>How good your memory??</h1>
        <h4>
          Find all pairs in
          <em>
            <span> least time </span>
          </em>
          & with
          <em>
            <span> minimum clicks </span>
          </em>
        </h4>
      </div>
      {!startGame && (
        <div id="start">
          <button id="startBtn" onClick={() => setStartGame(true)}>
            Let us Find Out
          </button>
        </div>
      )}

      {startGame && (
        <div id="game">
          <div id="game-container">
            <div id="game-board">
              {existing.length > 0
                ? existing.map((card, index) => {
                  return (
                    <FlipCard key={index} card={card} getCard={getCard} isMatched={isMatched}  />
                  );
                })
                : ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

// Yeh App.ksxwalifile