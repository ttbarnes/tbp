import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H2 from 'components/H2';
import ProjectsSummary from 'components/Dev/ProjectsSummary';
import Projects from 'components/Dev/Projects';
import PageContainer from '../PageContainer';
import {
  selectProjectsSummary,
  selectProjectsData
} from './selectors';

export class ClientsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      projectsSummary,
      projects
    } = this.props;

    return (
      <PageContainer smallWidth>

        <Helmet
          title="Clients"
          meta={[
            { name: 'description', content: 'Some of the projects i\'ve been a part of' },
          ]}
        />

        <H1 hide>Clients</H1>

        <H2 h1Size>I{'\''}ve worked with some great people</H2>

        <ProjectsSummary projects={projectsSummary} />

        <Projects
          projects={projects}
        />
      </PageContainer>
    );
  }
}

ClientsPage.propTypes = {
  projectsSummary: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  projectsSummary: selectProjectsSummary(),
  projects: selectProjectsData()
});

const withConnect = connect(mapStateToProps, null);

export default compose(
  withConnect
)(ClientsPage);
