import { ActionType } from '../actionTypes';

const userReducer = (state = null, action) => {
    switch (action.type) {
        case ActionType.SET_USER:
            return action.payload;
        case ActionType.UNSET_USER:
            return null;
        default:
            return state;
    }
};

export default userReducer;