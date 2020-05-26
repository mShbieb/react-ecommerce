import { createSelector } from 'reselect';


const cartSelect = state => state.cart;

export const items = createSelector(cartSelect, cart => cart.items);

export const itemCount = createSelector(items, items => items.reduce((count, item) => count + item.quantity, 0));

export const itemTotal = createSelector(items, items => items.reduce((total, item) => total + (item.quantity * item.price), 0));

export const dropdownStatus = createSelector(cartSelect, cart => cart.dropdown_status);

