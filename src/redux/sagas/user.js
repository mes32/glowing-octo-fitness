import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('api/user', config);
        yield put({ type: 'SET_USER', payload: response.data });
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* updateUser(action) {
    try {
        yield axios.put('api/user', action.payload);
        yield put({ type: 'FETCH_USER' });
    } catch (error) {
        console.log('User update failed', error);
    }
}

function* userSaga() {
    yield takeLatest('FETCH_USER', fetchUser);
    yield takeLatest('UPDATE_USER', updateUser);
}

export default userSaga;