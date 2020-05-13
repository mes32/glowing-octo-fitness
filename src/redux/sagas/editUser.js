import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    EditUserAction,
    UserEditAlert
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
        yield put(UserEditAlert.clear());
        yield axios.put(`api/user/${id}/reset-password`, { password });
        yield put(UserEditAlert.passwordSuccess());
    } catch (error) {
        console.log('Get edit user request failed', error);
        yield put(UserEditAlert.passwordFail());
    }
}

function* userSaga() {
    yield takeLatest(ActionType.FETCH_EDIT_USER, fetchEditUser);
    yield takeLatest(ActionType.RESET_PASSWORD, resetPassword);
}

export default userSaga;