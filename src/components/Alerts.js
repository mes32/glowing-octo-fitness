import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Alerts(props) {
    return (
        <>
            {props.error && <Alert variant="danger" className="alert">{props.error}</Alert>}
            {props.warning && <Alert variant="warning" className="alert">{props.warning}</Alert>}
            {props.message && <Alert variant="primary" className="alert">{props.message}</Alert>}
        </>
    );
}

export default Alerts;