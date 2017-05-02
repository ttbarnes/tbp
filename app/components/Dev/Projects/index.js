import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H2 from 'components/H2';
import ProjectFilters from 'components/Dev/ProjectFilters';
import ProjectsList from 'components/Dev/ProjectsList';
import PageLink from 'components/PageLink';

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

      <H2 h1Size>Some of the projects i{'\''}ve been a part of</H2>

      <ProjectFilters handleClick={props.onClickProjectFilter} activeFilter={props.activeFilter} />

      <ProjectsList handleClick={props.onClickProjectListItem} data={props.projects} activeFilter={props.activeFilter} />

      <br />
      <br />
      <PageLink to="/about">About</PageLink>
      <PageLink to="/contact">Contact</PageLink>

    </article>
  );
}

Projects.propTypes = {
  activeFilter: PropTypes.string,
  projects: PropTypes.array,
  onClickProjectFilter: PropTypes.func,
  onClickProjectListItem: PropTypes.func
};


export default Projects;
