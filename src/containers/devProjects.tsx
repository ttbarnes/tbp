import { connect } from 'react-redux';
import { getFilteredDevProjects } from '../actions';
import DevProjectsList from '../components/devProjectsList';

const mapStateToProps = (state) => {
  return {
    devProjects: getFilteredDevProjects(state.devProjects, state.devProjectsFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      // dispatch(toggleTodo(id))
      console.log('onTodoClick.');
    }
  };
};

const DevProjects = connect(
  mapStateToProps,
  mapDispatchToProps
)(DevProjectsList);

export default DevProjects;
