import { createSelector } from 'reselect';


const shopsSelect = state => state.shops;

export const sections = createSelector(shopsSelect, shops => shops.sections);

