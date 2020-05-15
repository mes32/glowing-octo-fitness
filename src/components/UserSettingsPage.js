import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alerts from './Alerts';
import { AlertAction, UserAction } from '../redux/actionTypes';

function UserSettingsPage(props) {
    const [userDetails, setUserDetails] = useState({
        displayName: props.user.displayName,
        password: '',
        newPassword: ''
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
        if (userDetails.password && userDetails.newPassword) {
            props.dispatch(UserAction.updatePassword(userDetails));
            setUserDetails({
                ...userDetails,
                password: '',
                newPassword: ''
            });
        } else {
            props.dispatch(UserAction.update(userDetails));
            setUserDetails({
                ...userDetails,
                password: '',
                newPassword: ''
            });
        }
    };

    const cancelUpdate = () => {
        setUserDetails({
            displayName: props.user.displayName,
            password: '',
            newPassword: ''
        });
        props.dispatch(AlertAction.clearAll());
    };

    return (
        <div>
            <h1>Account Settings</h1>
            <h3>Welcome {displayName()}</h3>
            <Alerts error={props.error} message={props.message} />
            <Form onSubmit={submitUpdate}>
                <Form.Group>
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
                <Form.Group>
                    <Form.Label>Current Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Current Password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>New Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="New Password"
                        name="newPassword"
                        value={userDetails.newPassword}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Update Account</Button>
                <Button onClick={cancelUpdate} variant="secondary">Cancel</Button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(UserSettingsPage);