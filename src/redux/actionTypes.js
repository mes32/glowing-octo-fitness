export const ActionType = {
    FETCH_ALL_USERS: 'FETCH_ALL_USERS',
    SET_ALL_USERS: 'SET_ALL_USERS',
    UNSET_ALL_USERS: 'UNSET_ALL_USERS',

    FETCH_EDIT_USER: 'FETCH_EDIT_USER',
    RESET_PASSWORD: 'RESET_PASSWORD',
    SET_EDIT_USER: 'SET_EDIT_USER',
    UNSET_EDIT_USER: 'UNSET_EDIT_USER',

    FETCH_USER: 'FETCH_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    REGISTER_USER: 'REGISTER_USER',
    SET_USER: 'SET_USER',
    UNSET_USER: 'UNSET_USER',
    UPDATE_USER: 'UPDATE_USER',
    UPDATE_USER_PASSWORD: 'UPDATE_USER_PASSWORD',

    CLEAR_ALERTS: 'CLEAR_ALERTS',

    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGIN_INPUT_ERROR: 'LOGIN_INPUT_ERROR',
    LOGIN_NO_CODE: 'LOGIN_NO_CODE',

    REGISTRATION_FAILED: 'REGISTRATION_FAILED',
    REGISTRATION_INPUT_ERROR: 'REGISTRATION_INPUT_ERROR',
    REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',

    USER_EDIT_PASSWORD_FAIL: 'USER_EDIT_PASSWORD_FAIL',
    USER_EDIT_PASSWORD_SUCCESS: 'USER_EDIT_PASSWORD_SUCCESS',

    USER_SETTINGS_FAILED: 'USER_SETTINGS_FAILED',
    USER_SETTINGS_NO_CODE: 'USER_SETTINGS_NO_CODE',
    USER_SETTINGS_SUCCESS: 'USER_SETTINGS_SUCCESS',
    USER_SETTINGS_SUCCESS_PASSWORD: 'USER_SETTINGS_SUCCESS_PASSWORD'
};

export const AllUsersAction = {
    fetch: () => ({ type: ActionType.FETCH_ALL_USERS }),
    set: (users) => ({ type: ActionType.SET_ALL_USERS, payload: users }),
    unset: () => ({ type: ActionType.UNSET_ALL_USERS })
};

export const EditUserAction = {
    fetch: (id) => ({ type: ActionType.FETCH_EDIT_USER, payload: id }),
    resetPassword: (id, password) => ({ type: ActionType.RESET_PASSWORD, payload: { id, password } }),
    set: (editUser) => ({ type: ActionType.SET_EDIT_USER, payload: editUser }),
    unset: () => ({ type: ActionType.UNSET_EDIT_USER })
};

export const UserAction = {
    fetch: () => ({ type: ActionType.FETCH_USER }),
    login: (userCredentials) => ({ type: ActionType.LOGIN_USER, payload: userCredentials }),
    logout: (history) => ({ type: ActionType.LOGOUT_USER, payload: history }),
    register: (userCredentials) => ({ type: ActionType.REGISTER_USER, payload: userCredentials }),
    setUser: (user) => ({ type: ActionType.SET_USER, payload: user }),
    unset: () => ({ type: ActionType.UNSET_USER }),
    update: (user) => ({ type: ActionType.UPDATE_USER, payload: user }),
    updatePassword: (user) => ({ type: ActionType.UPDATE_USER_PASSWORD, payload: user }),
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

export const UserEditAlert = {
    clear: () => ({ type: ActionType.CLEAR_ALERTS }),
    passwordFail: () => ({ type: ActionType.USER_EDIT_PASSWORD_FAIL }),
    passwordSuccess: () => ({ type: ActionType.USER_EDIT_PASSWORD_SUCCESS })
};

export const UserSettingsAlert = {
    clear: () => ({ type: ActionType.CLEAR_ALERTS }),
    failed: () => ({ type: ActionType.USER_SETTINGS_FAILED }),
    noCode: () => ({ type: ActionType.USER_SETTINGS_NO_CODE }),
    success: () => ({ type: ActionType.USER_SETTINGS_SUCCESS }),
    successPassword: () => ({ type: ActionType.USER_SETTINGS_SUCCESS_PASSWORD })
};