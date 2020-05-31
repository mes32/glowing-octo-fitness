export const ActionType = {
    CLEAR_ALERTS: 'CLEAR_ALERTS',
    ALERT_ERROR: 'ALERT_ERROR',
    ALERT_WARNING: 'ALERT_WARNING',
    ALERT_MESSAGE: 'ALERT_MESSAGE',

    FETCH_ALL_USERS: 'FETCH_ALL_USERS',
    SET_ALL_USERS: 'SET_ALL_USERS',
    UNSET_ALL_USERS: 'UNSET_ALL_USERS',

    FETCH_EXERCISES: 'FETCH_EXERCISES',
    SET_EXERCISES: 'SET_EXERCISES',
    UNSET_EXERCISES: 'UNSET_EXERCISES',

    PREVIEW_WORKOUT_APPEND: 'PREVIEW_WORKOUT_APPEND',
    PREVIEW_WORKOUT_INC_REPS: 'PREVIEW_WORKOUT_INC_REPS',
    PREVIEW_WORKOUT_DEC_REPS: 'PREVIEW_WORKOUT_DEC_REPS',
    SET_PREVIEW_WORKOUT: 'SET_PREVIEW_WORKOUT',
    UNSET_PREVIEW_WORKOUT: 'UNSET_PREVIEW_WORKOUT',

    FETCH_USER: 'FETCH_USER',
    RESET_USER_PASSWORD: 'RESET_USER_PASSWORD',
    SET_USER: 'SET_USER',
    UNSET_USER: 'UNSET_USER',

    FETCH_USER_ACCOUNT: 'FETCH_USER_ACCOUNT',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER',
    SET_USER_ACCOUNT: 'SET_USER_ACCOUNT',
    UNSET_USER_ACCOUNT: 'UNSET_USER_ACCOUNT',
    UPDATE_USER_ACCOUNT: 'UPDATE_USER_ACCOUNT',
    UPDATE_USER_ACCOUNT_PASSWORD: 'UPDATE_USER_ACCOUNT_PASSWORD',

    CLOSE_WORKOUT_TAB: 'CLOSE_WORKOUT_TAB',
    OPEN_WORKOUT_TAB: 'OPEN_WORKOUT_TAB'
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

export const ExercisesAction = {
    fetch: () => ({ type: ActionType.FETCH_EXERCISES }),
    set: (exercises) => ({ type: ActionType.SET_EXERCISES, payload: exercises }),
    unset: () => ({ type: ActionType.UNSET_EXERCISES })
};

export const PreviewWorkoutAction = {
    appendExercise: (exercise) => ({ type: ActionType.PREVIEW_WORKOUT_APPEND, payload: exercise }),
    incrementReps: (blockIndex, repsIndex) => ({ type: ActionType.PREVIEW_WORKOUT_INC_REPS, payload: {blockIndex, repsIndex} }),
    decrementReps: (blockIndex, repsIndex) => ({ type: ActionType.PREVIEW_WORKOUT_DEC_REPS, payload: { blockIndex, repsIndex } }),
    set: (workout) => ({ type: ActionType.SET_PREVIEW_WORKOUT, payload: workout }),
    unset: () => ({ type: ActionType.UNSET_PREVIEW_WORKOUT })
};

export const User = {
    fetch: (id) => ({ type: ActionType.FETCH_USER, payload: id }),
    resetPassword: (id, password) => ({ type: ActionType.RESET_USER_PASSWORD, payload: { id, password } }),
    set: (editUser) => ({ type: ActionType.SET_USER, payload: editUser }),
    unset: () => ({ type: ActionType.UNSET_USER })
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

export const CreateWorkoutTab = {
    close: () => ({ type: ActionType.CLOSE_WORKOUT_TAB }),
    open: () => ({ type: ActionType.OPEN_WORKOUT_TAB })
};
