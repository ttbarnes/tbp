/*
 * devReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

// import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import devProjects from '../../data/dev.json';

import {
  SET_DEV_PROJECTS_FILTER_CATEGORY,
  SET_DEV_PROJECT_SELECTION,
} from './constants';

const initialState = fromJS({
  projects: devProjects,
  // filterCategory: 'All',
  filterCategory: 'Angular',
  selectedProject: null
});

function devReducers(state = initialState, action) {
  switch (action.type) {
    case SET_DEV_PROJECTS_FILTER_CATEGORY:
      return state
        .set('filterCategory', action.category);
    case SET_DEV_PROJECT_SELECTION:
      return state
        .set('selectedProject', action.id);
    default:
      return state;
  }
}

export default devReducers;
