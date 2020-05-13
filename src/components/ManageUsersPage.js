import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { AllUsersAction } from '../redux/actionTypes';

const DATABASE_DATE_FORMAT = 'YYYY-MM-DDThh:mm:ss.zzzZ';
const TABLE_DATE_FORMAT = 'YYYY-MM-DD';

function UserSettingsPage(props) {
    const history = useHistory();

    const dispatch = props.dispatch;
    useEffect(() => {
        dispatch(AllUsersAction.fetch());
    }, [dispatch]);

    const navigate = id => () => {
        history.push(`/admin/user/${id}/editDetails`);
    }

    return (
        <div>
            <h1>Manage User Accounts</h1>
            <Table striped size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Admin</th>
                        <th>Date Created</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user) =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.is_admin ? 'Admin' : ''}</td>
                            <td>{moment(user.date_created, DATABASE_DATE_FORMAT).format(TABLE_DATE_FORMAT)}</td>
                            <td>
                                <Button onClick={navigate(user.id)} variant="primary" size="sm">Edit</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.allUsers
});

export default connect(mapStateToProps)(UserSettingsPage);