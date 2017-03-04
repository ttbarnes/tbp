import { createSelector } from 'reselect';

const selectDev = () => (state) => state.get('dev');

const selectProjects = () => createSelector(
  selectDev(),
  (devState) => devState.get('projects')
);

const selectActiveProjectFilter = () => createSelector(
  selectDev(),
  (devState) => devState.get('filterCategory')
);

export {
  selectProjects,
  selectActiveProjectFilter
};
