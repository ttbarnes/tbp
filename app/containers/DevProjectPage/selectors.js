/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectDev = () => (state) => state.get('dev');


const selectDevProjects = () => createSelector(
  selectDev(),
  (devState) => devState.get('projects')
)

const selectProject = () => createSelector(
  selectDevProjects(),
  (devProjectsState) => devProjectsState.find(p => p.toJS().id === 3)
);

export {
  selectProject
};
