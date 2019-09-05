import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TreeList from 'components/TreeList';
import PageCta from 'components/PageCta';

function Projects(props) {
  const { projects } = props;

  return (
    <div>

      <TreeList
        data={projects}
        largeGroupHeight
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
