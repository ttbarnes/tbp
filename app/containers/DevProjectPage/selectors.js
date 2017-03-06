import { createSelector } from 'reselect';

const selectProjects = () => (state) => state.get('projects');

const selectProjectsData = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.get('data')
);

const selectProject = (projectId) => createSelector(
  selectProjectsData(),
  (projectsDataState) => projectsDataState.find((p) => p.toJS().id === projectId)
);

export {
  selectProject
};
