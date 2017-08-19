import { createSelector } from 'reselect';

const selectHobbies = () => (state) => state.hobbies;

const selectActivities = () => createSelector(
  selectHobbies(),
  (hobbiesState) => hobbiesState.activities
);

export {
  selectActivities
};
