import React, { PropTypes } from 'react';
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
  setProjectsFilterByIndustry,
  setProjectsFilterByTech
} from './actions';
import {
  selectProjectsSummary,
  selectProjectsData,
  selectProjectsFilterByIndustry,
  selectProjectsFilterByTech
} from './selectors';

export class ProjectsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      projectsSummary,
      projects,
      onClickFilterByIndustry,
      onClickFilterByTech,
      filterByIndustry,
      filterByTech
    } = this.props;

    return (
      <PageContainer smallWidth>

        <Helmet
          title="Projects"
          meta={[
            { name: 'description', content: 'Some of the projects i\'ve been a part of' },
          ]}
        />

        <H1 hide>Projects</H1>

        <H2 h1Size>I{'\''}ve worked with some great people</H2>

        <ProjectsSummary projects={projectsSummary} />

        <Projects
          projects={projects}
          onClickFilterByIndustry={onClickFilterByIndustry}
          onClickFilterByTech={onClickFilterByTech}
          filterByIndustry={filterByIndustry}
          filterByTech={filterByTech}
        />
      </PageContainer>
    );
  }
}

ProjectsPage.propTypes = {
  projectsSummary: PropTypes.array,
  projects: PropTypes.array,
  onClickFilterByIndustry: PropTypes.func,
  onClickFilterByTech: PropTypes.func,
  filterByIndustry: PropTypes.string,
  filterByTech: PropTypes.string
};

export function mapDispatchToProps(dispatch) {
  return {
    onClickFilterByIndustry: (industry) => {
      dispatch(setProjectsFilterByIndustry(industry));
    },
    onClickFilterByTech: (tech) => {
      dispatch(setProjectsFilterByTech(tech));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  projectsSummary: selectProjectsSummary(),
  projects: selectProjectsData(),
  filterByIndustry: selectProjectsFilterByIndustry(),
  filterByTech: selectProjectsFilterByTech()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(ProjectsPage);
