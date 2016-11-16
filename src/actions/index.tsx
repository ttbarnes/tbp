export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_DEV_PROJECTS_FILTER = 'SET_DEV_PROJECTS_FILTER';
export const SET_DEV_PROJECT_SELECTED = 'SET_DEV_PROJECT_SELECTED';
export const GET_DEV_PROJECT_SELECTED = 'GET_DEV_PROJECT_SELECTED';

export const DevProjectsFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_CATEGORY_REACT: 'SHOW_CATEGORY_REACT',
  SHOW_CATEGORY_ANGULAR: 'SHOW_CATEGORY_ANGULAR',
  SHOW_CATEGORY_STATIC: 'SHOW_CATEGORY_STATIC',
  SHOW_CATEGORY_OTHER: 'SHOW_CATEGORY_OTHER'
};

export const getFilteredDevProjects = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_CATEGORY_REACT':
      return todos.filter(t => t.category === 'React');
    case 'SHOW_CATEGORY_ANGULAR':
      return todos.filter(t => t.category === 'Angular');
    case 'SHOW_CATEGORY_STATIC':
      return todos.filter(t => t.category === 'Static');
    case 'SHOW_CATEGORY_OTHER':
      return todos.filter(t => t.category === 'Other');
    default:
      return todos;
  }
};

export const setDevProjectsFilter = (filter) => {
  return {
    type: SET_DEV_PROJECTS_FILTER,
    filter
  };
};

export const getDevProject = (devProjects, id) => {
  return devProjects.find(p => p.id === id);
};

export const setDevProjectSelected = (id) => {
  return {
    type: SET_DEV_PROJECT_SELECTED,
    id
  };
};
