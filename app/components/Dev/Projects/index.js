import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import ProjectFilters from 'components/Dev/ProjectFilters';
import ProjectsList from 'components/Dev/ProjectsList';
import PageLink from 'components/PageLink';
import { ProjectsHeader } from './styled';

function Projects(props) {
  return (
    <article>

      <Helmet
        title="Projects"
        meta={[
          { name: 'description', content: 'Dev projects' },
        ]}
      />

      <H1 hide>Projects</H1>

      <ProjectsHeader>
        <p>2018</p>

        <ProjectFilters
          onClickFilterByIndustry={props.onClickFilterByIndustry}
          onClickFilterByTech={props.onClickFilterByTech}
        />

      </ProjectsHeader>

      <ProjectsList
        data={props.projects}
        filterByIndustry={props.filterByIndustry}
        filterByTech={props.filterByTech}
      />

      <br />
      <br />
      <PageLink to="/about">About</PageLink>
      <PageLink to="/contact">Contact</PageLink>

    </article>
  );
}

Projects.propTypes = {
  filterByIndustry: PropTypes.string,
  filterByTech: PropTypes.string,
  projects: PropTypes.array,
  onClickFilterByIndustry: PropTypes.func.isRequired,
  onClickFilterByTech: PropTypes.func.isRequired
};

export default Projects;
