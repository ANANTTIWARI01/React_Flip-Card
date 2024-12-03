/* eslint-disable react/prop-types */
import Questionmark from "./assets/questionmark.jpg";

// eslint-disable-next-line no-unused-vars
function Card({ card, rotateCard, isCardFlip, getCard,isMatched}) {
    return (
        <div
            className="flip-card"
            key={card.id} 
            onClick={() => rotateCard(card.id,card.src)}
                 
        >
            <div
                className="inner"
                style={isCardFlip && isMatched ? { transform: "rotateY(180deg)" } : {transform:"rotate(0)"}}

            >
                <div className="front"
                    onClick={() => getCard(card.src)}
                >
                    <img src={Questionmark} alt="Question mark image" />

                </div>
                <div className="back">
                    <img src={card.src} alt="actual image" />
                </div>
            </div>
        </div>
    )
}

export default Card


