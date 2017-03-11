import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProjectFilters from 'components/Dev/ProjectFilters';
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
      <article>

        <Helmet
          title="Projects"
          meta={[
            { name: 'description', content: 'Dev projects' },
          ]}
        />

        <h1>Projects</h1>

        <p>Some of the projects i{'\''}ve been a part of{':'}</p>

        <br />

        <ProjectFilters onClick={this.props.onClickProjectFilter} activeFilter={this.props.activeFilter} />

        <br />

        <Projects onClick={this.props.onClickProjectListItem} data={this.props.projects} activeFilter={this.props.activeFilter} />

      </article>
    );
  }
}

ProjectsPage.propTypes = {
  activeFilter: React.PropTypes.string,
  projects: React.PropTypes.object,
  onClickProjectFilter: React.PropTypes.func,
  onClickProjectListItem: React.PropTypes.func
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

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
