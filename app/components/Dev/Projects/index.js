import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H3 from 'components/H3';
import ProjectsList from 'components/Dev/ProjectsList';
import ProjectsFooter from 'components/Dev/ProjectsFooter';

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

      <H3>I{'\''}ve built a few things........</H3>

      <ProjectsList
        data={props.projects}
      />

      <ProjectsFooter />

    </article>
  );
}

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
