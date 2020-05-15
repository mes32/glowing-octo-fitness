import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alerts from './Alerts';
import { AlertAction, UserAction } from '../redux/actionTypes';

const DEFAULT_STATE = {
    username: '',
    password: ''
};

function RegisterPage(props) {
    const [state, setState] = useState(DEFAULT_STATE);

    const registerUser = (event) => {
        event.preventDefault();
        const userCredentials = {
            username: state.username,
            password: state.password
        }
        if (state.username && state.password) {
            props.dispatch(UserAction.register(userCredentials));
        } else {
            props.dispatch(AlertAction.error('Please enter username and password'));
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
            <Alerts error={props.error} message={props.message} />
            <Form onSubmit={registerUser}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={state.username}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
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

export default connect()(RegisterPage);