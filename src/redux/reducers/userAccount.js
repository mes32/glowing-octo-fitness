import { ActionType } from '../actionTypes';

const userAccountReducer = (state = null, action) => {
    switch (action.type) {
        case ActionType.SET_USER_ACCOUNT:
            return action.payload;
        case ActionType.UNSET_USER_ACCOUNT:
            return null;
        default:
            return state;
    }
};

export default userAccountReducer;