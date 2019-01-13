import React, { PropTypes } from 'react';
import ProjectsList from 'components/Dev/ProjectsList';
import ProjectsFooter from 'components/Dev/ProjectsFooter';

function Projects(props) {
  return (
    <div>

      <ProjectsList
        data={props.projects}
      />

      <ProjectsFooter />

    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array
};

export default Projects;
