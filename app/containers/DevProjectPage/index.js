import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectProject
} from './selectors';

import DevProjectMain from 'components/Dev/ProjectMain';

const mapStateToProps = (state, { params }) => createStructuredSelector({
  data: selectProject(params.id)
});

export default connect(mapStateToProps, {})(DevProjectMain);
