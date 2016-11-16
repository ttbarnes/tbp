import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
// import { routerReducer } from 'react-router-redux';
import {
   SET_DEV_PROJECTS_FILTER,
   DevProjectsFilter
} from '../actions';
const { SHOW_ALL } = DevProjectsFilter;

const mockDevProjects = [
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
];

function devProjectsFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_DEV_PROJECTS_FILTER:
      return action.filter;
    default:
      return state;
  }
};

function devProjects(state = mockDevProjects, action) {
  switch (action.type) {
    // case ADD_TODO:
    //   return [
    //     ...state,
    //     {
    //       title: action.title,
    //       completed: false
    //     }
    //   ]
    // case TOGGLE_TODO:
    //   return state.map((project, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, project, {
    //         completed: !project.completed
    //       })
    //     }
    //     return project
    //   })
    default:
      return state;
  }
};

const tbpReducers = combineReducers({
  devProjectsFilter,
  devProjects
});

export default tbpReducers;
