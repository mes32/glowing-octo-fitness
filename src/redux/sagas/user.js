import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    AlertAction,
    UserAction
} from '../actionTypes';

function* fetchUser() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('api/user', config);
        yield put(UserAction.setUser(response.data));
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* loginUser(action) {
    console.log('loginUser');
    try {
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
        yield put(UserAction.fetch());
        yield history.push('/user/workouts');
    } catch (error) {
        console.log('Error with user login:', error);
        if (error.response.status === 401) {
            yield put(AlertAction.error('Username and password didn\'t match. Try again.'));
        } else {
            yield put(AlertAction.error('No response from server. Is the server running?'));
        }
    }
}

function* logoutUser(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const history = action.payload;

        yield put(AlertAction.clearAll());
        yield axios.post('api/user/logout', config);
        yield put(UserAction.unset());
        yield history.push('/logout');
    } catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* registerUser(action) {
    try {
        const user = action.payload;

        yield put(AlertAction.clearAll());
        yield axios.post('api/user/register', user);
        yield put(AlertAction.message(`Registered new user: ${user.username}`));
        // TODO: diferentiate between exection and server is offline
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put(AlertAction.error('That username might already be taken. Try a different one.'));
    }
}

function* updateUser(action) {
    try {
        const body = {
            displayName: action.payload.displayName
        };

        yield put(AlertAction.clearAll());
        yield axios.put('api/user/display-name', body);
        yield put(UserAction.fetch());
        yield put(AlertAction.message('User account details successfully updated'));
    } catch (error) {
        console.log('Unable to update user account details ', error);
        yield put(AlertAction.message('Unable to update user account details'));
    }
}

function* updateUserPassword(action) {
    try {
        const user = action.payload;

        yield put(AlertAction.clearAll());
        yield axios.put('api/user', user);
        yield put(UserAction.fetch());
        yield put(AlertAction.message('Password successfully changed'));
    } catch (error) {
        console.log('Unable to set user password', error);
        yield put(AlertAction.error('Unable to set user password'));
    }
}

function* userSaga() {
    yield takeLatest(ActionType.FETCH_USER, fetchUser);
    yield takeLatest(ActionType.LOGIN_USER, loginUser);
    yield takeLatest(ActionType.LOGOUT_USER, logoutUser);
    yield takeLatest(ActionType.REGISTER_USER, registerUser);
    yield takeLatest(ActionType.UPDATE_USER, updateUser);
    yield takeLatest(ActionType.UPDATE_USER_PASSWORD, updateUserPassword);
}

export default userSaga;