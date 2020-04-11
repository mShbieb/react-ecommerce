import {cartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";

const initState = {
    dropdown_status: false,
    items: [],
};


const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_DROPDOWN_STATUS:
            return {
                ...state,
                dropdown_status: !state.dropdown_status,
            };
        case cartActionTypes.ADD_TO_CART:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload),
            };
        default:
            return state;
    }
};


export default cartReducer;
