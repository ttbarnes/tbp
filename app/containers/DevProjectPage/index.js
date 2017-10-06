import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProjectSingle from 'components/Dev/ProjectSingle';
import {
  selectProject
} from './selectors';

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  data: selectProject(ownProps.match.params.id)
});

const withConnect = connect(mapStateToProps, {});

export default compose(
  withConnect
)(ProjectSingle);
