import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import ProjectFilters from 'components/Dev/ProjectFilters';
import ProjectsList from 'components/Dev/ProjectsList';

function Projects(props) {
  return (
    <article>

      <Helmet
        title="Projects"
        meta={[
          { name: 'description', content: 'Dev projects' },
        ]}
      />

      <H1>Projects</H1>

      <p>Some of the projects i{'\''}ve been a part of{':'}</p>

      <br />

      <ProjectFilters handleClick={props.onClickProjectFilter} activeFilter={props.activeFilter} />

      <br />

      <ProjectsList handleClick={props.onClickProjectListItem} data={props.projects} activeFilter={props.activeFilter} />

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
