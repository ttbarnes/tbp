import projects from '../../data/projects.json';
import projectsSummary from '../../data/projects-summary.json';

const initialState = {
  data: projects,
  summary: projectsSummary
};

function projectsReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default projectsReducers;
