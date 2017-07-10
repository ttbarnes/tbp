import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProjectSingle from 'components/Dev/ProjectSingle';
import {
  selectProject
} from './selectors';

const mapStateToProps = (state, { params }) => createStructuredSelector({
  data: selectProject(params.id)
});

export default connect(mapStateToProps, {})(ProjectSingle);
