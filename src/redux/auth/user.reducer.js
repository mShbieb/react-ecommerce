import {userActionTypes} from "./user.types";

const initState = {
    user: null,
};


const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};


export default cartReducer;
