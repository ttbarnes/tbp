import { connect } from 'react-redux';
import { getDevProject } from '../actions';
import DevProjectSingle from '../components/dev/projectSingle';

const mapStateToProps = (state) => {
  return {
    project: getDevProject(state.devProjects, state.devProjectSelected)
  };
};

const DevProjectSingleContainer = connect(
  mapStateToProps
)(DevProjectSingle);

export default DevProjectSingleContainer;
