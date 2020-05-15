import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

import Alerts from './Alerts';
import { User } from '../redux/actionTypes';

const DATABASE_DATE_FORMAT = 'YYYY-MM-DDThh:mm:ss.zzzZ';
const TABLE_DATE_FORMAT = 'YYYY-MM-DD';

function EditUserDetailsPage(props) {
    const dispatch = props.dispatch;
    const id = props.match.params.id;
    useEffect(() => {
        dispatch(User.fetch(id));
    }, [dispatch, id]);

    const [newPassword, setNewPassword] = useState('');

    const handlePasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const submitPasswordReset = (event) => {
        event.preventDefault();
        if (newPassword) {
            dispatch(User.resetPassword(id, newPassword));
            setNewPassword('');
        }
    }

    const user = props.user;

    return (
        <div>
            <h1>User Details</h1>
            <Table className="user-details-table" striped bordered size="sm">
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Display Name:</td>
                        <td>{user.display_name}</td>
                    </tr>
                    <tr>
                        <td>Is Admin:</td>
                        <td>{user.is_admin ? 'True' : 'False'}</td>
                    </tr>
                    <tr>
                        <td>Date Created:</td>
                        <td>{moment(user.date_created, DATABASE_DATE_FORMAT).format(TABLE_DATE_FORMAT)}</td>
                    </tr>
                </tbody>
            </Table>
            <h3>Password Reset</h3>
            <Alerts />
            <Form onSubmit={submitPasswordReset}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Update Password</Button>
            </Form>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.editUser
});

export default connect(mapStateToProps)(EditUserDetailsPage);