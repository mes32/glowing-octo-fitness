import { combineReducers } from 'redux';
import errors from './errors';
import user from './user';

const rootReducer = combineReducers({
    errors,
    user
});

export default rootReducer;