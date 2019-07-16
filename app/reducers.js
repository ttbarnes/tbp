/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import projectsReducers from 'containers/ProjectsPage/reducer';
// import hobbiesReducers from 'containers/HobbiesPage/reducer';
import aboutReducers from 'containers/AboutPage/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routerReducer,
    projects: projectsReducers,
    // hobbies: hobbiesReducers,
    about: aboutReducers,
    ...injectedReducers
  });
}
