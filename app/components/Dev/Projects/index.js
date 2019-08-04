import React from 'react';
import PropTypes from 'prop-types';

import ProjectsList from 'components/Dev/ProjectsList';
import ProjectsFooter from 'components/Dev/ProjectsFooter';

function Projects(props) {
  const { projects } = props;

  return (
    <div>

      <ProjectsList
        data={projects}
      />

      <ProjectsFooter />

    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
