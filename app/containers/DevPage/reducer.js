import { fromJS } from 'immutable';
import devProjects from '../../data/dev.json';

import {
  SET_DEV_PROJECTS_FILTER_CATEGORY,
  SET_DEV_PROJECT_SELECTION,
} from './constants';

const initialState = fromJS({
  projects: devProjects,
  filterCategory: 'Web apps',
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
