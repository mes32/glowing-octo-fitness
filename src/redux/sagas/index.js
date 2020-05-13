import { all } from 'redux-saga/effects';

import allUsers from './allUsers';
import editUser from './editUser';
import user from './user';

export default function* rootSaga() {
    yield all([
        allUsers(),
        editUser(),
        user()
    ]);
}