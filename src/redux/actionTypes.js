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

    FETCH_USER_ACCOUNT: 'FETCH_USER_ACCOUNT',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    SET_USER_ACCOUNT: 'SET_USER_ACCOUNT',
    UNSET_USER_ACCOUNT: 'UNSET_USER_ACCOUNT',
    UPDATE_USER_ACCOUNT: 'UPDATE_USER_ACCOUNT',
    UPDATE_USER_ACCOUNT_PASSWORD: 'UPDATE_USER_ACCOUNT_PASSWORD'
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

export const UserAccount = {
    fetch: () => ({ type: ActionType.FETCH_USER_ACCOUNT }),
    login: (userCredentials) => ({ type: ActionType.LOGIN, payload: userCredentials }),
    logout: (history) => ({ type: ActionType.LOGOUT, payload: history }),
    register: (userCredentials) => ({ type: ActionType.REGISTER, payload: userCredentials }),
    setUser: (user) => ({ type: ActionType.SET_USER_ACCOUNT, payload: user }),
    unset: () => ({ type: ActionType.UNSET_USER_ACCOUNT }),
    update: (user) => ({ type: ActionType.UPDATE_USER_ACCOUNT, payload: user }),
    updatePassword: (user) => ({ type: ActionType.UPDATE_USER_ACCOUNT_PASSWORD, payload: user })
};
