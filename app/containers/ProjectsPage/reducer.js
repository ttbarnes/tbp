import projects from '../../data/projects.json';

import {
  SET_PROJECTS_FILTER_CATEGORY,
  SET_PROJECT_SELECTION,
} from './constants';

const initialState = {
  data: projects,
  filterCategory: 'Web apps',
  selectedProject: null
};

function projectsReducers(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS_FILTER_CATEGORY:
      return Object.assign({}, state, {
        filterCategory: action.category
      });

    case SET_PROJECT_SELECTION:
      return Object.assign({}, state, {
        selectedProject: action.id
      });
    default:
      return state;
  }
}

export default projectsReducers;
