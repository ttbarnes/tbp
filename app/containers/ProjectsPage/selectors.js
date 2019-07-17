import { createSelector } from 'reselect';

const selectProjectsSummary = () => (state) => state.projects.summary;

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
  selectProjectsSummary,
  selectProjectsData,
  selectProjectsFilterByIndustry,
  selectProjectsFilterByTech
};
