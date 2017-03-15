import { createSelector } from 'reselect';

const selectProjects = () => (state) => state.get('projects');

const selectProjectsData = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.data
);

const selectActiveProjectFilter = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.filterCategory
);

export {
  selectProjectsData,
  selectActiveProjectFilter
};
