import { connect } from 'react-redux';
import { setDevProjectsFilter } from '../actions';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.devProjectsFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setDevProjectsFilter(ownProps.filter));
    }
  };
};

const DevProjectFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default DevProjectFilterLink;
