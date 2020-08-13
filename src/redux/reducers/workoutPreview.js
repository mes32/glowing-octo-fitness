import { ActionType } from '../actionTypes';

const workoutPreviewReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.WORKOUT_PREVIEW_APPEND:
            const exercise = action.payload;
            if (state.length === 0) {
                return [{ exercise: exercise, reps: [0] }];
            } else if (exercise.id !== state[state.length - 1].exercise.id) {
                if (state[state.length - 1].reps.length === 1 && state[state.length - 1].reps[0] === 0) {
                    // TODO - should actually remove all entries with reps === [0] not in the last position
                    state.pop();
                }
                return [...state, { exercise: exercise, reps: [0] }];
            } else {
                return state;
            }
        case ActionType.WORKOUT_PREVIEW_INC_REPS:
            return state.map((exerciseBlock, i) => {
                if (i === action.payload.blockIndex) {
                    return {
                        ...exerciseBlock,
                        reps: exerciseBlock.reps.map((rep, j) => {
                            if (j === action.payload.repsIndex) {
                                return rep + 1;
                            } else {
                                return rep;
                            }
                        })
                    }
                } else {
                    return exerciseBlock;
                }
            });
        case ActionType.WORKOUT_PREVIEW_DEC_REPS:
            return state.map((exerciseBlock, i) => {
                if (i === action.payload.blockIndex) {
                    return {
                        ...exerciseBlock,
                        reps: exerciseBlock.reps.map((rep, j) => {
                            if (j === action.payload.repsIndex && rep > 0) {
                                return rep - 1;
                            } else {
                                return rep;
                            }
                        })
                    }
                } else {
                    return exerciseBlock;
                }
            });
        case ActionType.SET_WORKOUT_PREVIEW:
            return action.payload;
        case ActionType.UNSET_WORKOUT_PREVIEW:
            return [];
        default:
            return state;
    }
};

export default workoutPreviewReducer;