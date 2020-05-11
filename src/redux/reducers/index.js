import { combineReducers } from 'redux';
import allUsers from './allUsers';
import errors from './errors';
import messages from './messages';
import user from './user';

const rootReducer = combineReducers({
    allUsers,
    errors,
    messages,
    user
});

export default rootReducer;