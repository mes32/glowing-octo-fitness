import { ActionType } from '../actionTypes';

const workoutTabIsOpenReducer = (state = false, action) => {
    switch (action.type) {
        case ActionType.OPEN_WORKOUT_TAB:
            return true;
        case ActionType.CLOSE_WORKOUT_TAB:
            return false;
        default:
            return state;
    }
};

export default workoutTabIsOpenReducer;