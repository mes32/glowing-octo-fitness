export const ActionType = {
    FETCH_USER: 'FETCH_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    REGISTER_USER: 'REGISTER_USER',
    SET_USER: 'SET_USER',
    UNSET_USER: 'UNSET_USER',
    UPDATE_USER: 'UPDATE_USER'
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

// export const LoginError = {
//     CLEAR: 'LOGIN_ERROR_CLEAR',
//     INVALID_INPUT: 'LOGIN_ERROR_INVALID_INPUT',
//     FAILED: 'LOGIN_ERROR_FAILED',
//     NO_CODE: 'LOGIN_ERROR_NO_CODE'
// };