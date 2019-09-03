import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectsList from 'components/Dev/ProjectsList';
import PageCta from 'components/PageCta';

function Projects(props) {
  const { projects } = props;

  return (
    <div>

      <ProjectsList
        data={projects}
      />

      <PageCta
        heading="Maybe we could build something together?"
        contactCopy="Send me a message"
        secondCta={<p><Link to="about">Read about me</Link></p>}
      />

    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
