import { ActionType } from '../actionTypes';

const allUsersReducer = (state = [], action) => {
    switch (action.type) {
        case ActionType.SET_ALL_USERS:
            return action.payload;
        case ActionType.UNSET_ALL_USERS:
            return [];
        default:
            return state;
    }
};

export default allUsersReducer;