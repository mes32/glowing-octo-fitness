import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    AlertAction,
    EditUserAction
} from '../actionTypes';

function* fetchEditUser(action) {
    try {
        const id = action.payload;
        const response = yield axios.get(`api/user/${id}`);
        yield put(EditUserAction.set(response.data));
    } catch (error) {
        console.log('Get edit user request failed', error);
    }
}

function* resetPassword(action) {
    try {
        const id = action.payload.id;
        const password = action.payload.password;

        yield put(AlertAction.clearAll());
        yield axios.put(`api/user/${id}/reset-password`, { password });
        yield put(AlertAction.message('Success, reset user\'s password'));
    } catch (error) {
        console.log('Unable to reset user\'s password', error);
        yield put(AlertAction.error('Unable to reset user\'s password'));
    }
}

function* userSaga() {
    yield takeLatest(ActionType.FETCH_EDIT_USER, fetchEditUser);
    yield takeLatest(ActionType.RESET_PASSWORD, resetPassword);
}

export default userSaga;