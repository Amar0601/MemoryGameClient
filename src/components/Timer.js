import React, { useState, useEffect } from 'react';
import { Button, Badge } from 'reactstrap';

const Timer = (props) => {
    return (
        <div className="col-sm-3 float-left">
            <Button color="primary" outline>
                Elapsed Time : <Badge color="primary">
                    {
                        `${Math.floor(props.seconds / 60)} m : ${props.seconds % 60} s`
                    }</Badge>
            </Button>
        </div>

    );
};

export default Timer;