import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DEFAULT_STATE = {
    username: '',
    password: ''
};

function RegisterPage(props) {
    const [state, setState] = useState(DEFAULT_STATE);

    const registerUser = (event) => {
        event.preventDefault();
        if (state.username && state.password) {
            props.dispatch({
                type: 'REGISTER',
                payload: {
                    username: state.username,
                    password: state.password
                }
            });
        } else {
            props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
        }
    }

    const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <div>
            <h1>Register User</h1>
            {props.errors.registrationMessage && (
                <h2 className="alert" role="alert">
                    {props.errors.registrationMessage}
                </h2>
            )}
            <Form onSubmit={registerUser}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={state.username}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Register User</Button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps)(RegisterPage);