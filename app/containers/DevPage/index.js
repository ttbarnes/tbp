import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import H1 from 'components/H1';
import ProjectFilters from 'components/Dev/ProjectFilters';
import Projects from 'components/Dev/Projects';
import {
  setDevProjectsFilter,
  setDevSelectedProject
} from './actions';
import {
  selectProjects,
  selectActiveProjectFilter
} from './selectors';

import CV from '../../assets/Tony-Barnes-CV-2017.pdf';

export class DevPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>

        <Helmet
          title="Dev"
          meta={[
            { name: 'description', content: 'Dev projects and about' },
          ]}
        />

        <H1>Dev</H1>

        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. <a href={CV} target="_blank">CV</a></p>
        <p>Senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique, malesuada fames ac turpis egestas, morbi tristique and Senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique, malesuada fames ac turpis egestas, morbi tristique.</p>

        <p>Netus et malesuada fames ac turpis egestas. Senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique, malesuada fames ac turpis egestas, morbi tristique and Senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique, malesuada fames ac turpis egestas, morbi tristique.</p>

        <p>Some projects I have been involved with</p>
        <br />

        <ProjectFilters onClick={this.props.onClickProjectFilter} activeFilter={this.props.activeFilter} />

        <br />

        <Projects onClick={this.props.onClickProjectListItem} data={this.props.projects} activeFilter={this.props.activeFilter} />

      </article>
    );
  }
}

DevPage.propTypes = {
  activeFilter: React.PropTypes.string,
  projects: React.PropTypes.object,
  onClickProjectFilter: React.PropTypes.func,
  onClickProjectListItem: React.PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickProjectFilter: (evt) => {
      dispatch(setDevProjectsFilter(evt));
    },
    onClickProjectListItem: (id) => {
      dispatch(setDevSelectedProject(id));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  projects: selectProjects(),
  activeFilter: selectActiveProjectFilter(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DevPage);
