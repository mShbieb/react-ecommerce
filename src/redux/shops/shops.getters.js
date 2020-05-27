import { createSelector } from 'reselect';


const shopsSelect = state => state.shops;

export const sections = createSelector(shopsSelect, shops => shops.sections);

export const sectionByName = (name) => {
    console.log(createSelector(sections, sections => sections.find(item => item.routeName === name)));
    return createSelector(sections, sections => sections.find(item => item.routeName === name))
};

