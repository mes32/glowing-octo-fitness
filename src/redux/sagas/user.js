import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
    ActionType,
    LoginAlert,
    RegistrationAlert,
    UserAction,
    UserSettingsAlert
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
        yield put(LoginAlert.clear());

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
            yield put(LoginAlert.failed());
        } else {
            yield put(LoginAlert.noCode());
        }
    }
}

function* logoutUser(action) {
    try {
        yield put(LoginAlert.clear());

        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const history = action.payload;

        yield axios.post('api/user/logout', config);
        yield put(UserAction.unset());
        yield history.push('/logout');
    } catch (error) {
        console.log('Error with user logout:', error);
    }
}

function* registerUser(action) {
    try {
        yield put(RegistrationAlert.clear());
        yield axios.post('api/user/register', action.payload);
        yield put(RegistrationAlert.success(action.payload.username));
    } catch (error) {
        console.log('Error with user registration:', error);
        yield put(RegistrationAlert.failed());
    }
}

function* updateUser(action) {
    try {
        const body = {
            displayName: action.payload.displayName
        };

        yield put(UserSettingsAlert.clear());
        yield axios.put('api/user/display-name', body);
        yield put(UserAction.fetch());
        yield put(UserSettingsAlert.success());
    } catch (error) {
        console.log('User update failed', error);
        yield put(UserSettingsAlert.failed());
    }
}

function* updateUserPassword(action) {
    try {
        yield put(UserSettingsAlert.clear());
        yield axios.put('api/user', action.payload);
        yield put(UserAction.fetch());
        yield put(UserSettingsAlert.successPassword());
    } catch (error) {
        console.log('User update failed', error);
        yield put(UserSettingsAlert.failed());
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