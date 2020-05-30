import { ActionType } from '../actionTypes';

const previewWorkoutReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.PREVIEW_WORKOUT_APPEND:
            const exercise = action.payload;
            if (state.length === 0) {
                return [{ exercise: exercise, reps: [0] }];
            } else if (exercise.id !== state[state.length - 1].exercise.id) {
                if (state[state.length - 1].reps.length === 1 && state[state.length - 1].reps[0] === 0) {
                    // TODO - should actually remove all entries with reps === [0]
                    state.pop();
                }
                return [...state, { exercise: exercise, reps: [0] }];
            } else {
                return state;
            }
        case ActionType.SET_PREVIEW_WORKOUT:
            return action.payload;
        case ActionType.UNSET_PREVIEW_WORKOUT:
            return [];
        default:
            return state;
    }
};

export default previewWorkoutReducer;