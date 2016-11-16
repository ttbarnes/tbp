import { connect } from 'react-redux';
import { setDevProjectsFilter } from '../actions';
import * as Radium from 'radium';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.devProjectsFilter,
    styles: ownProps.styles
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
)(Radium(Link));

export default (Radium(DevProjectFilterLink));
