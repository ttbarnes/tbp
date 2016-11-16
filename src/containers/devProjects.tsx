import { connect } from 'react-redux';
import {
  getFilteredDevProjects,
  setDevProjectSelected
} from '../actions';
import DevProjectsList from '../components/devProjectsList';

const mapStateToProps = (state) => {
  return {
    devProjects: getFilteredDevProjects(state.devProjects, state.devProjectsFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProjectClick: (id) => {
      dispatch(setDevProjectSelected(id));
    }
  };
};

const DevProjects = connect(
  mapStateToProps,
  mapDispatchToProps
)(DevProjectsList);

export default DevProjects;
