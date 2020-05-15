import { combineReducers } from 'redux';
import alerts from './alerts';
import allUsers from './allUsers';
import editUser from './editUser';
import userAccount from './userAccount';

const rootReducer = combineReducers({
    alerts,
    allUsers,
    editUser,
    userAccount
});

export default rootReducer;