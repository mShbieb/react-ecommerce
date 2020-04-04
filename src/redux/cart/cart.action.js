import {cartActionTypes} from "./cart.types";

export const toggleDropdownStatus = status => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_STATUS,
    payload: status,
});
