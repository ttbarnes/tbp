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

import { combineReducers } from 'redux';
import { Immutable, fromJS, List, Map } from 'immutable';

import {
  CHANGE_USERNAME,
  SHOW_ALL,
  SET_DEV_PROJECTS_FILTER_CATEGORY,
  SET_DEV_PROJECT_SELECTED,
} from './constants';

const initialState = fromJS({
  projects : [
    {
      id: 1,
      title: 'some react app',
      completed: false,
      category: 'React'
    },
    {
      id: 2,
      title: 'test angular app',
      completed: true,
      category: 'Angular'
    },
    {
      id: 3,
      title: 'react portfolio',
      completed: true,
      category: 'React'
    },
    {
      id: 4,
      title: 'angular project',
      completed: true,
      category: 'Angular'
    },
    {
      id: 5,
      title: 'dummy static project',
      completed: true,
      category: 'Static'
    },
    {
      id: 6,
      title: 'test other project',
      completed: true,
      category: 'Other'
    }
  ],
  filterCategory: 'All'
});

/*  
function devProjectSelected(state = null, action) {
  switch (action.type) {
    case SET_DEV_PROJECT_SELECTED:
      return action.id;
    default:
      return state;
  }
}
*/

function devReducers(state = initialState, action) {
  switch (action.type) {
    case SET_DEV_PROJECTS_FILTER_CATEGORY: 
      return state
        .set('filterCategory', action.category)
    default:
      return state;
  }
};

export default devReducers;
