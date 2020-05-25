import { combineReducers } from 'redux';
import alerts from './alerts';
import allUsers from './allUsers';
import user from './user';
import userAccount from './userAccount';
import workoutTabIsOpen from './workoutTabIsOpen';

const rootReducer = combineReducers({
    alerts,
    allUsers,
    user,
    userAccount,
    workoutTabIsOpen
});

export default rootReducer;