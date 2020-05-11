import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Table from 'react-bootstrap/Table';

import { AllUsersAction } from '../redux/actionTypes';

const DATABASE_DATE_FORMAT = 'YYYY-MM-DDThh:mm:ss.zzzZ';
const TABLE_DATE_FORMAT = 'YYYY-MM-DD';

function UserSettingsPage(props) {
    const dispatch = props.dispatch;
    useEffect(() => {
        dispatch(AllUsersAction.fetch());
    }, [dispatch]);

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
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((user) =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.is_admin ? 'Admin' : ''}</td>
                            <td>{moment(user.date_created, DATABASE_DATE_FORMAT).format(TABLE_DATE_FORMAT)}</td>
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