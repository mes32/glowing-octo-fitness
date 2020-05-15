import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

function Alerts({ error, warning, message }) {
    return (
        <>
            {error && <Alert variant="danger" className="alert">{error}</Alert>}
            {warning && <Alert variant="warning" className="alert">{warning}</Alert>}
            {message && <Alert variant="primary" className="alert">{message}</Alert>}
        </>
    );
}

const mapStateToProps = state => ({
    error: state.alerts.error,
    warning: state.alerts.warning,
    message: state.alerts.message
});

export default connect(mapStateToProps)(Alerts);