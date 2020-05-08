import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* loginUser(action) {
    try {
        yield put({ type: 'CLEAR_LOGIN_ERROR' });

        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const credentials = {
            username: action.payload.username,
            password: action.payload.password
        };

        const history = action.payload.history;

        yield axios.post('api/user/login', credentials, config);
        yield put({ type: 'FETCH_USER' });
        yield history.push('/user/workouts');
    } catch (error) {
        console.log('Error with user login:', error);
        if (error.response.status === 401) {
            yield put({ type: 'LOGIN_FAILED' });
        } else {
            yield put({ type: 'LOGIN_FAILED_NO_CODE' });
        }
    }
}

function* logoutUser(action) {
    try {
        yield put({ type: 'CLEAR_LOGIN_ERROR' });

        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const history = action.payload.history;

        yield axios.post('api/user/logout', config);
        yield put({ type: 'UNSET_USER' });
        yield history.push('/logout');
    } catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* loginSaga() {
    yield takeLatest('LOGIN', loginUser);
    yield takeLatest('LOGOUT', logoutUser);
}

export default loginSaga;