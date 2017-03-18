import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectProject
} from './selectors';

import ProjectSingle from 'components/Dev/ProjectSingle';

const mapStateToProps = (state, { params }) => createStructuredSelector({
  data: selectProject(params.id)
});

export default connect(mapStateToProps, {})(ProjectSingle);
