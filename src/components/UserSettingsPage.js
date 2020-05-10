import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { UPDATE_USER } from '../redux/actionTypes';

function UserSettingsPage(props) {
    const [userDetails, setUserDetails] = useState({
        displayName: props.user.displayName,
        password: ''
    });

    const handleInputChange = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value,
        });
    }

    const displayName = () => {
        if (props.user.displayName) {
            return props.user.displayName;
        } else {
            return props.user.username;
        }
    };

    const submitUpdate = (event) => {
        event.preventDefault();
        props.dispatch({
            type: UPDATE_USER,
            payload: userDetails
        });
    };

    const cancelUpdate = () => {
        setUserDetails({
            displayName: props.user.displayName,
            password: ''
        });
    };

    return (
        <div>
            <h1>Account Settings</h1>
            <h3>Welcome {displayName()}</h3>
            <Form onSubmit={submitUpdate}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={props.user.username}
                        disabled
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Display Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Display Name"
                        name="displayName"
                        value={userDetails.displayName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Update</Button>
                <Button onClick={cancelUpdate} variant="secondary">Cancel</Button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(UserSettingsPage);