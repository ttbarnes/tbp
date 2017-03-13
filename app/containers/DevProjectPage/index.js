import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectProject
} from './selectors';

import DevProjectMain from '../../components/Dev/ProjectMain';

const mapStateToProps = (state, { params }) => createStructuredSelector({
  project: selectProject(params.id).toJS(),
});

export default connect(mapStateToProps)(DevProjectMain);
