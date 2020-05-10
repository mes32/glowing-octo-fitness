import { combineReducers } from 'redux';

import { ActionType } from '../actionTypes';

const loginPage = (state = '', action) => {
    switch (action.type) {
        case ActionType.CLEAR_ALERTS:
            return '';
        case ActionType.LOGIN_INPUT_ERROR:
            return 'Please enter your username and password';
        case ActionType.LOGIN_FAILED:
            return 'Username and password didn\'t match. Try again.';
        case ActionType.LOGIN_NO_CODE:
            return 'No response from server. Is the server running?';
        default:
            return state;
    }
};

const registrationPage = (state = '', action) => {
    switch (action.type) {
        case ActionType.CLEAR_ALERTS:
            return '';
        case ActionType.REGISTRATION_INPUT_ERROR:
            return 'Choose a username and password';
        case ActionType.REGISTRATION_FAILED:
            return 'That username might already be taken. Try a different one.';
        default:
            return state;
    }
};

const userSettingsPage = (state = '', action) => {
    switch (action.type) {
        case ActionType.CLEAR_ALERTS:
            return '';
        case ActionType.USER_SETTINGS_FAILED:
            return 'Unable to update user settings';
        case ActionType.USER_SETTINGS_NO_CODE:
            return 'Unable to update user settings. Is the server running?';
        default:
            return state;
    }
};

export default combineReducers({
    loginPage,
    registrationPage,
    userSettingsPage
});