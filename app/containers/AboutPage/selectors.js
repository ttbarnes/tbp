import { createSelector } from 'reselect';

const selectAbout = () => (state) => state.get('about');

const selectAboutTech = () => createSelector(
  selectAbout(),
  (aboutState) => aboutState
);

export {
  selectAboutTech
};
