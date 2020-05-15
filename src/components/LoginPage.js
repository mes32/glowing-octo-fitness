import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alerts from './Alerts';
import { UserAction, AlertAction } from '../redux/actionTypes';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const login = (event) => {
        event.preventDefault();
        if (username && password) {
            props.dispatch(
                UserAction.login({ username, password, history })
            );
        } else {
            props.dispatch(AlertAction.error('Please enter your username and password'));
        }
    }

    const handleInputChange = (event) => {
        if (event.target.name === 'username') {
            setUsername(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <Alerts error={props.error} />
            <Form>     
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button onClick={login} variant="primary" type="submit">Login</Button>
            </Form>
        </div>
    );
}

export default connect()(LoginPage);