import { ActionType } from '../actionTypes';

const DEFAULT_STATE = {
    error: '',
    warning: '',
    message: ''
}

const alertsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionType.ALERT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case ActionType.ALERT_WARNING:
            return {
                ...state,
                warning: action.payload
            };
        case ActionType.ALERT_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        case ActionType.CLEAR_ALERTS:
            return DEFAULT_STATE;
        default:
            return state;
    }
};

export default alertsReducer;