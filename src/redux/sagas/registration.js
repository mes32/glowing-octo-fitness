import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { REGISTER } from '../actionTypes';

function* registerUser(action) {
    try {
        yield put({ type: 'CLEAR_REGISTRATION_ERROR' });
        yield axios.post('api/user/register', action.payload);

    } catch (error) {
        console.log('Error with user registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* registrationSaga() {
    yield takeLatest(REGISTER, registerUser);
}

export default registrationSaga;