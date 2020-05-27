import { ActionType } from '../actionTypes';

const previewWorkoutReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionType.SET_PREVIEW_WORKOUT:
            return action.payload;
        case ActionType.UNSET_PREVIEW_WORKOUT:
            return {};
        default:
            return state;
    }
};

export default previewWorkoutReducer;