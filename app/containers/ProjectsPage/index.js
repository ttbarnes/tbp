import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Projects from 'components/Dev/Projects';
import {
  setProjectsFilter,
  setSelectedProject
} from './actions';
import {
  selectProjectsData,
  selectActiveProjectFilter
} from './selectors';

export class ProjectsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Projects
        projects={this.props.projects}
        onClickProjectFilter={this.props.onClickProjectFilter}
        onClickProjectListItem={this.props.onClickProjectListItem}
        activeFilter={this.props.activeFilter}
      />
    );
  }
}
ProjectsPage.propTypes = {
  activeFilter: PropTypes.string,
  projects: PropTypes.array,
  onClickProjectFilter: PropTypes.func,
  onClickProjectListItem: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickProjectFilter: (evt) => {
      dispatch(setProjectsFilter(evt));
    },
    onClickProjectListItem: (id) => {
      dispatch(setSelectedProject(id));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  projects: selectProjectsData(),
  activeFilter: selectActiveProjectFilter(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(ProjectsPage);
