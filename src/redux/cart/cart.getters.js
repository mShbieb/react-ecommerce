import { createSelector } from 'reselect';


const cartSelect = state => state.cart;

export const items = createSelector(cartSelect, cart => cart.items);

export const itemCount= createSelector(items, items => items.reduce((count, item) => count + item.quantity, 0));

