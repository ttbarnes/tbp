import { createSelector } from 'reselect';

const selectTechState = () => (state) => state.tech;

const selectTech = () => createSelector(
  selectTechState(),
  (aboutState) => aboutState
);

export {
  selectTech
};
