import { createSelector } from 'reselect';

const selectProjects = () => (state) => state.get('projects');

const selectProjectsData = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.data
);

const selectProject = (projectId) => createSelector(
  selectProjectsData(),
  (projectsDataState) => projectsDataState.find((p) => p.id === projectId)
);

export {
  selectProject
};
