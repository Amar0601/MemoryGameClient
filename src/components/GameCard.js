import React, { useState, useEffect } from 'react';
import { Toast, ToastBody, Card, CardText } from 'reactstrap';
import axios from 'axios';

const GameCard = ({ card, suite, game, handleSuiteData, handleSetRoundData, roundData }) => {
    const [backColor, setBackColor] = useState();
  
    const handleCardClick = ({ suite, game, data, card }) => {
        if (handleSuiteData(data, roundData)) {
            suite === 1 ? handleSetRoundData({ "card1": data }) : handleSetRoundData({ "card2": data });            
        } else {
            console.log('Card from this suite is already selected');
        }
    }

    return (
        <div onClick={() => {
            handleCardClick({
                "game": game,
                "suite": suite,
                "data": card.data,
                "card": card,
                "roundData": roundData
            })
        }} className="text-center">

            {
                card &&                 
                <div className="p-3 my-2 rounded" style={card.style}>
                    <Toast style={{ "font-size": "3rem" }}>
                        <ToastBody style={{ "padding": "2rem 0.5rem" }}>
                            {card.visibility ? card.data : "X"}
                        </ToastBody>
                    </Toast>
                </div>
            }

        </div>
    )
}

export default GameCard;

