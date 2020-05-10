import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import user from './user';

const rootReducer = combineReducers({
    errors,
    messages,
    user
});

export default rootReducer;