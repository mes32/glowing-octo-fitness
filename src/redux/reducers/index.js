import { combineReducers } from 'redux';
import allUsers from './allUsers';
import editUser from './editUser';
import errors from './errors';
import messages from './messages';
import user from './user';

const rootReducer = combineReducers({
    allUsers,
    editUser,
    errors,
    messages,
    user
});

export default rootReducer;