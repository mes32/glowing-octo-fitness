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

export default combineReducers({
    registrationPage
});