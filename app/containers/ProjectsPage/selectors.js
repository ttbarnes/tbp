import { createSelector } from 'reselect';

const selectProjects = () => (state) => state.get('projects');

const selectProjectsData = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.get('data')
);

const selectActiveProjectFilter = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.get('filterCategory')
);

export {
  selectProjectsData,
  selectActiveProjectFilter
};
