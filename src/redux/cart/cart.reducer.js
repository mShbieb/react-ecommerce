import {cartActionTypes} from "./cart.types";

const initState = {
    dropdown_status: false,
};


const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_DROPDOWN_STATUS:
            return {
                ...state,
                dropdown_status: !state.dropdown_status,
            };
        default:
            return state;
    }
};


export default cartReducer;
