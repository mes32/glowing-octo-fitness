import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    AlertAction,
    UserAccount
} from '../actionTypes';

function* fetchUserAccount() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('api/user', config);
        yield put(UserAccount.setUser(response.data));
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* login(action) {
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
        yield put(UserAccount.fetch());
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

function* logout(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const history = action.payload;

        yield put(AlertAction.clearAll());
        yield axios.post('api/user/logout', config);
        yield put(UserAccount.unset());
        yield history.push('/logout');
    } catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* register(action) {
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

function* updateUserAccount(action) {
    try {
        const body = {
            displayName: action.payload.displayName
        };

        yield put(AlertAction.clearAll());
        yield axios.put('api/user/display-name', body);
        yield put(UserAccount.fetch());
        yield put(AlertAction.message('User account details successfully updated'));
    } catch (error) {
        console.log('Unable to update user account details ', error);
        yield put(AlertAction.message('Unable to update user account details'));
    }
}

function* updateUserAccountPassword(action) {
    try {
        const user = action.payload;

        yield put(AlertAction.clearAll());
        yield axios.put('api/user', user);
        yield put(UserAccount.fetch());
        yield put(AlertAction.message('Password successfully changed'));
    } catch (error) {
        console.log('Unable to set user password', error);
        yield put(AlertAction.error('Unable to set user password'));
    }
}

function* userSaga() {
    yield takeLatest(ActionType.FETCH_USER_ACCOUNT, fetchUserAccount);
    yield takeLatest(ActionType.LOGIN, login);
    yield takeLatest(ActionType.LOGOUT, logout);
    yield takeLatest(ActionType.REGISTER, register);
    yield takeLatest(ActionType.UPDATE_USER_ACCOUNT, updateUserAccount);
    yield takeLatest(ActionType.UPDATE_USER_ACCOUNT_PASSWORD, updateUserAccountPassword);
}

export default userSaga;