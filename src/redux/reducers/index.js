import { combineReducers } from 'redux';
import alerts from './alerts';
import allUsers from './allUsers';
import user from './user';
import userAccount from './userAccount';

const rootReducer = combineReducers({
    alerts,
    allUsers,
    user,
    userAccount
});

export default rootReducer;