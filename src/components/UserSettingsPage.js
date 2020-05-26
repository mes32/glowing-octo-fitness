import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Alerts from './Alerts';
import { AlertAction, UserAccount } from '../redux/actionTypes';

function UserSettingsPage({ clearAlerts, user, updatePassword, updateUser }) {
    const [userDetails, setUserDetails] = useState({
        displayName: user.displayName,
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
        if (user.displayName) {
            return user.displayName;
        } else {
            return user.username;
        }
    };

    const submitUpdate = (event) => {
        event.preventDefault();
        if (userDetails.password && userDetails.newPassword) {
            updatePassword(userDetails);
            setUserDetails({
                ...userDetails,
                password: '',
                newPassword: ''
            });
        } else {
            updateUser(userDetails);
            setUserDetails({
                ...userDetails,
                password: '',
                newPassword: ''
            });
        }
    };

    const cancelUpdate = () => {
        setUserDetails({
            displayName: user.displayName,
            password: '',
            newPassword: ''
        });
        clearAlerts();
    };

    return (
        <div>
            <h1>Account Settings</h1>
            <h3>Welcome {displayName()}</h3>
            <Alerts />
            <Form onSubmit={submitUpdate}>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={user.username}
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
    user: state.userAccount
});

const mapDispatchToProps = dispatch => ({
    clearAlerts: () => dispatch(AlertAction.clearAll()),
    updatePassword: (userDetails) => dispatch(UserAccount.updatePassword(userDetails)),
    updateUser: (userDetails) => dispatch(UserAccount.update(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingsPage);