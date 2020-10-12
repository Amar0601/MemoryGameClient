import React, {useEffect, useState} from 'react';
import { Row, Col } from 'reactstrap';
import GameCard from './GameCard';

export const Suite = (props) => {
    
    return (
        <div>
            <Row>
                {
                    (props.data)
                        .map(cardElement => 
                            <Col sm>
                                <GameCard                                    
                                    card={cardElement}
                                    suite={props.suite}
                                    game={props.game}
                                    handleSuiteData={props.handleSuiteData}
                                    handleSetRoundData={props.handleSetRoundData}
                                    roundData={props.roundData}
                                />
                            </Col>)
                }
            </Row>
        </div>
    )
}

