import { ActionType } from '../actionTypes';

const exercisesReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.SET_EXERCISES:
            return action.payload;
        case ActionType.UNSET_EXERCISES:
            return [];
        default:
            return state;
    }
};

export default exercisesReducer;