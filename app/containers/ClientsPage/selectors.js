import { createSelector } from 'reselect';

const selectProjectsSummary = () => (state) => state.projects.summary;

const selectProjects = () => (state) => state.projects;

const selectProjectsData = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.data
);

export {
  selectProjectsSummary,
  selectProjectsData
};
