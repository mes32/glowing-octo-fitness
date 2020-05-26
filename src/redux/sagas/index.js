import { all } from 'redux-saga/effects';

import allUsers from './allUsers';
import exercises from './exercises';
import user from './user';
import userAccount from './userAccount';

export default function* rootSaga() {
    yield all([
        allUsers(),
        exercises(),
        user(),
        userAccount()
    ]);
}