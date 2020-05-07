import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        if (username && password) {
            props.dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
        } else {
            props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
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
            {props.errors.loginMessage && (
                <h2 className="alert" role="alert" >
                    {props.errors.loginMessage}
                </h2>
            )}
            <Form>     
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
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

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);