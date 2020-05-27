import { combineReducers } from 'redux';
import alerts from './alerts';
import allUsers from './allUsers';
import exercises from './exercises';
import previewWorkout from './previewWorkout';
import user from './user';
import userAccount from './userAccount';
import workoutTabIsOpen from './workoutTabIsOpen';

const rootReducer = combineReducers({
    alerts,
    allUsers,
    exercises,
    previewWorkout,
    user,
    userAccount,
    workoutTabIsOpen
});

export default rootReducer;