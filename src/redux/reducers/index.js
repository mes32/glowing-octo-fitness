import { combineReducers } from 'redux';
import alerts from './alerts';
import allUsers from './allUsers';
import editUser from './editUser';
import user from './user';

const rootReducer = combineReducers({
    alerts,
    allUsers,
    editUser,
    user
});

export default rootReducer;