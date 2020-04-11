import {cartActionTypes} from "./cart.types";

export const toggleDropdownStatus = status => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_STATUS,
    payload: status,
});


export const addToCart = product => ({
    type: cartActionTypes.ADD_TO_CART,
    payload: product,
});
