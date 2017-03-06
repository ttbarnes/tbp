import { fromJS } from 'immutable';
import projects from '../../data/projects.json';

import {
  SET_PROJECTS_FILTER_CATEGORY,
  SET_PROJECT_SELECTION,
} from './constants';

const initialState = fromJS({
  data: projects,
  filterCategory: 'Web apps',
  selectedProject: null
});

function projectsReducers(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS_FILTER_CATEGORY:
      return state
        .set('filterCategory', action.category);
    case SET_PROJECT_SELECTION:
      return state
        .set('selectedProject', action.id);
    default:
      return state;
  }
}

export default projectsReducers;
