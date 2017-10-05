/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import projectsReducers from 'containers/ProjectsPage/reducer';
import hobbiesReducers from 'containers/HobbiesPage/reducer';
import aboutReducers from 'containers/AboutPage/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
  /* istanbul ignore next */
    case LOCATION_CHANGE:
      return Object.assign({}, state, {
        locationBeforeTransitions: action.payload
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    projects: projectsReducers,
    hobbies: hobbiesReducers,
    about: aboutReducers,
    ...asyncReducers
  });
}