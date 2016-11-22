/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProjectFilters from 'components/Dev/ProjectFilters';
import Projects from 'components/Dev/Projects';

import { 
  setDevProjectsFilter,
  setDevSelectedProject
} from  './actions';
import { 
  selectProjects,
  selectActiveProjectFilter
} from './selectors';

export class DevPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <article>

        <Helmet
          title="Dev"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        <p>activeFilter: {this.props.activeFilter}</p>

        <ProjectFilters onClick={this.props.onClickProjectFilter} activeFilter={this.props.activeFilter} />

        <br/>

        <Projects onClick={this.props.onClickProjectListItem} data={this.props.projects} activeFilter={this.props.activeFilter} />

      </article>
    );
  }
}

DevPage.propTypes = {
  projects: React.PropTypes.any,
  onClick: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    onClickProjectFilter: (evt) => {
      dispatch(setDevProjectsFilter(evt))
    },
    onClickProjectListItem: (id) => {
      dispatch(setDevSelectedProject(id))
    }
  };
}

const mapStateToProps = createStructuredSelector({
  projects: selectProjects(),
  activeFilter: selectActiveProjectFilter(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(DevPage);
