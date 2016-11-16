import { connect } from 'react-redux';
import { getDevProject } from '../actions';
import DevProjectSingle from '../components/devProjectSingle';

const mapStateToProps = (state) => {
  return {
    project: getDevProject(state.devProjects, state.devProjectSelected)
  };
};

const DevProjectSingleContainer = connect(
  mapStateToProps
)(DevProjectSingle);

export default DevProjectSingleContainer;
