import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';

const ModalPopup = ({ history, toggle, isOpen, time, errors }) => {

    return (
        <div>

            <Modal isOpen={isOpen} backdrop={false} toggle={toggle} className="primary">
                <ModalHeader toggle={toggle}>Congratulation, game finished!</ModalHeader>
                <ModalBody>
                    <div>
                        Total Elapsed Time : <h4>
                            <Badge variant="primary">{`${Math.floor(time / 60)} minutes, ${time % 60} seconds`}</Badge>
                        </h4>
                    </div>
                    <hr />
                    <div>
                        Total Errors : <h4>
                            <Badge variant="warning">{errors}</Badge>
                        </h4>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary">
                        <Link to={'/'}>Start New Game</Link>
                    </Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalPopup;