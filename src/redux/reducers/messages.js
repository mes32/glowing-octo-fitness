import { combineReducers } from 'redux';

import { ActionType } from '../actionTypes';

const registrationPage = (state = '', action) => {
    switch (action.type) {
        case ActionType.CLEAR_ALERTS:
            return '';
        case ActionType.REGISTRATION_SUCCESS:
            return `Registered new user: ${action.payload}`;
        default:
            return state;
    }
};

const userEditPage = (state = '', action) => {
    switch (action.type) {
        case ActionType.CLEAR_ALERTS:
            return '';
        case ActionType.USER_EDIT_PASSWORD_SUCCESS:
            return 'Success, reset user\'s password';
        default:
            return state;
    }
};

const userSettingsPage = (state = '', action) => {
    switch (action.type) {
        case ActionType.CLEAR_ALERTS:
            return '';
        case ActionType.USER_SETTINGS_SUCCESS:
            return 'User account details successfully updated';
        case ActionType.USER_SETTINGS_SUCCESS_PASSWORD:
            return 'Password successfully changed';
        default:
            return state;
    }
};

export default combineReducers({
    registrationPage,
    userEditPage,
    userSettingsPage
});