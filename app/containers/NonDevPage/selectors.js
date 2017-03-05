import { createSelector } from 'reselect';

const selectNonDev = () => (state) => state.get('nonDev');

const selectActivities = () => createSelector(
  selectNonDev(),
  (nonDevState) => nonDevState.get('activities')
);

export {
  selectActivities
};
