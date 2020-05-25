import {cartActionTypes} from "./cart.types";

export const toggleDropdownStatus = status => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_STATUS,
    payload: status,
});


export const addToCart = product => ({
    type: cartActionTypes.ADD_TO_CART,
    payload: product,
});

export const updateCartItem = item => ({
    type: cartActionTypes.UPDATE_CART_ITEM,
    payload: item,
});


export const deleteCartItem = item => ({
    type: cartActionTypes.DELETE_CART_ITEM,
    payload: item,
});
