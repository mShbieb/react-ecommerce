import {cartActionTypes} from "./cart.types";
import {addItemToCart, updateCartItem, deleteCartItem} from "./cart.utils";

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
        case cartActionTypes.UPDATE_CART_ITEM:
            return {
                ...state,
                items: updateCartItem(state.items, action.payload),
            };
        case cartActionTypes.DELETE_CART_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};


export default cartReducer;
