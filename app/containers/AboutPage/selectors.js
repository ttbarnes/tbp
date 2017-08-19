import { createSelector } from 'reselect';

const selectAbout = () => (state) => state.about;

const selectAboutTech = () => createSelector(
  selectAbout(),
  (aboutState) => aboutState
);

export {
  selectAboutTech
};
