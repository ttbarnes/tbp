import React, { PropTypes } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Projects from 'components/Dev/Projects';
import PageContainer from '../PageContainer';
import {
  setProjectsFilterByIndustry,
  setProjectsFilterByTech
} from './actions';
import {
  selectProjectsData,
  selectProjectsFilterByIndustry,
  selectProjectsFilterByTech
} from './selectors';

export class ProjectsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      projects,
      onClickFilterByIndustry,
      onClickFilterByTech,
      filterByIndustry,
      filterByTech
    } = this.props;

    return (
      <PageContainer>
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
  projects: selectProjectsData(),
  filterByIndustry: selectProjectsFilterByIndustry(),
  filterByTech: selectProjectsFilterByTech()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect
)(ProjectsPage);
