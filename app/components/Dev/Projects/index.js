import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
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

      <ProjectsList
        data={props.projects}
      />

      <br />
      <br />
      <PageLink to="/about">About</PageLink>
      <PageLink to="/contact">Contact</PageLink>

    </article>
  );
}

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
