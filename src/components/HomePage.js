import React from 'react';
import {
    Jumbotron, Card, CardText, CardBody, CardHeader, Button, Row, Col
} from 'reactstrap';
import axios from 'axios';
import { generateSuite } from '../helperFunctions/helpers';

const HomePage = ({history}) => {

    const handleLevelClick = (e) => {
        const level = e.target.value;
        axios.post(`https://localhost:44399/api/init`, { level })
        .then(res => {            
          if(res.statusText === "OK"){
            console.log(res);  
            console.log(res.data);              
              history.push({
                pathname: `/play/${level}`,                
                state: { 
                    game: res.data.gameId, 
                    suiteOneCards: generateSuite(level), 
                    suiteTwoCards: generateSuite(level)                    
                }
              });
          }
        })
        .catch(err => {console.log(err)});        
    }

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Memory Game</h1>

                <hr className="my-2" />
                <p>Please select difficulty level from options below</p>
                <p className="">
                    <Row>
                        <Col xs="6" sm="4">
                            <Card className="text-center">
                                <CardHeader>Easy</CardHeader>
                                <CardBody>
                                    <CardText>
                                        Contains 2 suits with 5 cards in each.
                                    </CardText>
                                    <br />
                                    <Button value="easy" onClick={handleLevelClick} color="success">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="6" sm="4">
                            <Card className="text-center">
                                <CardHeader>Medium</CardHeader>
                                <CardBody>
                                    <CardText>
                                        Contains 2 suits with 10 cards in each.
                                    </CardText>
                                    <br />
                                    <Button value="medium" onClick={handleLevelClick} color="warning">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xs="6" sm="4">
                            <Card className="text-center">
                                <CardHeader>Hard</CardHeader>
                                <CardBody>
                                    <CardText>
                                        Contains 2 suits with 25 cards in each.
                            </CardText>
                                    <br />
                                    <Button value="hard" onClick={handleLevelClick} color="danger">Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </p>
            </Jumbotron>
        </div>
    )
}

export default HomePage;