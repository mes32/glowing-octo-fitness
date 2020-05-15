export const ActionType = {
    CLEAR_ALERTS: 'CLEAR_ALERTS',
    ALERT_ERROR: 'ALERT_ERROR',
    ALERT_WARNING: 'ALERT_WARNING',
    ALERT_MESSAGE: 'ALERT_MESSAGE',

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
    UPDATE_USER_PASSWORD: 'UPDATE_USER_PASSWORD'
};

export const AlertAction = {
    clearAll: () => ({ type: ActionType.CLEAR_ALERTS }),
    error: (text) => ({ type: ActionType.ALERT_ERROR, payload: text }),
    warning: (text) => ({ type: ActionType.ALERT_WARNING, payload: text }),
    message: (text) => ({ type: ActionType.ALERT_MESSAGE, payload: text })
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
