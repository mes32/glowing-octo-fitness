import { all } from 'redux-saga/effects';

import allUsers from './allUsers';
import user from './user';

export default function* rootSaga() {
    yield all([
        allUsers(),
        user()
    ]);
}