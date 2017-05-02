import { createSelector } from 'reselect';

const selectHobbies = () => (state) => state.get('hobbies');

const selectActivities = () => createSelector(
  selectHobbies(),
  (hobbiesState) => hobbiesState.get('activities')
);

export {
  selectActivities
};
