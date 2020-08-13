import { combineReducers } from 'redux';
import alerts from './alerts';
import allUsers from './allUsers';
import exercises from './exercises';
import user from './user';
import userAccount from './userAccount';
import workoutTabIsOpen from './workoutTabIsOpen';
import workoutPreview from './workoutPreview';

const rootReducer = combineReducers({
    alerts,
    allUsers,
    exercises,
    user,
    userAccount,
    workoutTabIsOpen,
    workoutPreview
});

export default rootReducer;