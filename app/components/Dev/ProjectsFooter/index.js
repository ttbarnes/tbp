import React from 'react';
import { Link } from 'react-router-dom';
import H3 from 'components/H3';
import { StyledProjectsFooter } from './styled';

const ProjectsFooter = () => (
  <StyledProjectsFooter>
    <H3>I love collaborating - maybe we could build something together?</H3>
    <p><Link to="contact">Send me a message</Link></p>
    <p><Link to="about">Read about me</Link></p>
  </StyledProjectsFooter>
);

export default ProjectsFooter;
