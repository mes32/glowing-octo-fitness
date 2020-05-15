import { all } from 'redux-saga/effects';

import allUsers from './allUsers';
import editUser from './editUser';
import userAccount from './userAccount';

export default function* rootSaga() {
    yield all([
        allUsers(),
        editUser(),
        userAccount()
    ]);
}