import { ActionType } from '../actionTypes';

const previewWorkoutReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.PREVIEW_WORKOUT_APPEND:
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
        case ActionType.PREVIEW_WORKOUT_INC_REPS:
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
        case ActionType.PREVIEW_WORKOUT_DEC_REPS:
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
        case ActionType.SET_PREVIEW_WORKOUT:
            return action.payload;
        case ActionType.UNSET_PREVIEW_WORKOUT:
            return [];
        default:
            return state;
    }
};

export default previewWorkoutReducer;