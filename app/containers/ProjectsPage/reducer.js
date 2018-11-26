import projects from '../../data/projects.json';

import {
  SET_PROJECTS_FILTER_BY_INDUSTRY,
  SET_PROJECTS_FILTER_BY_TECH
} from './constants';

const initialState = {
  data: projects,
  filterByIndustry: '',
  filterByTech: ''
};

function projectsReducers(state = initialState, action) {
  switch (action.type) {
    case SET_PROJECTS_FILTER_BY_INDUSTRY:
      return Object.assign({}, state, {
        filterByIndustry: action.payload
      });

    case SET_PROJECTS_FILTER_BY_TECH:
      return Object.assign({}, state, {
        filterByTech: action.payload
      });
    default:
      return state;
  }
}

export default projectsReducers;
