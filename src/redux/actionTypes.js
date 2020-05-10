export const ActionType = {
    FETCH_USER: 'FETCH_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    REGISTER_USER: 'REGISTER_USER',
    SET_USER: 'SET_USER',
    UNSET_USER: 'UNSET_USER',
    UPDATE_USER: 'UPDATE_USER',

    CLEAR_ALERTS: 'CLEAR_ALERTS',

    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGIN_INPUT_ERROR: 'LOGIN_INPUT_ERROR',
    LOGIN_NO_CODE: 'LOGIN_NO_CODE',

    REGISTRATION_FAILED: 'REGISTRATION_FAILED',
    REGISTRATION_INPUT_ERROR: 'REGISTRATION_INPUT_ERROR',
    REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS'
}

export const UserAction = {
    fetch: () => ({ type: ActionType.FETCH_USER }),
    login: (userCredentials) => ({ type: ActionType.LOGIN_USER, payload: userCredentials }),
    logout: (history) => ({ type: ActionType.LOGOUT_USER, payload: history }),
    register: (userCredentials) => ({ type: ActionType.REGISTER_USER, payload: userCredentials }),
    setUser: (user) => ({ type: ActionType.SET_USER, payload: user }),
    unset: () => ({ type: ActionType.UNSET_USER }),
    update: (user) => ({ type: ActionType.UPDATE_USER, payload: user }),
};

export const LoginAlert = {
    clear: () => ({ type: ActionType.CLEAR_ALERTS }),
    failed: () => ({ type: ActionType.LOGIN_FAILED }),
    inputError: () => ({ type: ActionType.LOGIN_INPUT_ERROR }),
    noCode: () => ({ type: ActionType.LOGIN_NO_CODE })
};

export const RegistrationAlert = {
    clear: () => ({ type: ActionType.CLEAR_ALERTS }),
    failed: () => ({ type: ActionType.REGISTRATION_FAILED }),
    inputError: () => ({ type: ActionType.REGISTRATION_INPUT_ERROR }),
    success: (username) => ({ type: ActionType.REGISTRATION_SUCCESS, payload: username })
};