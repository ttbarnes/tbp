import { createSelector } from 'reselect';

const selectTempProjectsSummary = () => (state) => state.projects.tempProjectsSummary;

const selectProjects = () => (state) => state.projects;

const selectProjectsData = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.data
);

const selectProjectsFilterByIndustry = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.filterByIndustry
);

const selectProjectsFilterByTech = () => createSelector(
  selectProjects(),
  (projectsState) => projectsState.filterByTech
);

export {
  selectTempProjectsSummary,
  selectProjectsData,
  selectProjectsFilterByIndustry,
  selectProjectsFilterByTech
};
