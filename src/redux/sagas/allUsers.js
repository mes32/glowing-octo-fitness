import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    AllUsersAction
} from '../actionTypes';

function* fetchAllUsers() {
    try {
        const response = yield axios.get('api/user/all');
        console.log(response.data);
        yield put(AllUsersAction.set(response.data));
    } catch (error) {
        console.log('Get all users request failed', error);
    }
}

function* userSaga() {
    yield takeLatest(ActionType.FETCH_ALL_USERS, fetchAllUsers);
}

export default userSaga;