import { createSelector } from 'reselect';


const sectionsSelect = state => state.sections;

export const sections = createSelector(sectionsSelect, sections => sections.sections);

