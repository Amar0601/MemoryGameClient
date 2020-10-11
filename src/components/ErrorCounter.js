import React from 'react';
import { Button, Badge } from 'reactstrap'

const ErrorCounter = (props) => {
    return (
        <div className="col-sm-3 float-right">
            <Button color="danger" outline>
                Error Count : <Badge color="danger">{props.errorCount}</Badge>
            </Button>
        </div>
    )
}

export default ErrorCounter;