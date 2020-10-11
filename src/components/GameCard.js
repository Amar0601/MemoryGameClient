import React, { useState, useEffect } from 'react';
import { Toast, ToastBody } from 'reactstrap';
import axios from 'axios';

const GameCard = ({ card, suite, game, handleSuiteData, handleSetRoundData }) => {

    const handleCardClick = ({ suite, game, data }) => {
        if (handleSuiteData(data)) {
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
                "data": card.data
            })
        }} className="text-center">

            {
                card && <div className="p-3 my-2 rounded">
                    <Toast style={{ "font-size": "3rem" }}>
                        <ToastBody style={{ "padding": "3rem" }}>
                            {card.visibility ? card.data : "X"}
                        </ToastBody>
                    </Toast>                    
                </div>
            }

        </div>
    )
}

export default GameCard;