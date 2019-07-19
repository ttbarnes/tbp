import React from 'react';
import { Link } from 'react-router-dom';
import H3 from 'components/H3';
import { StyledProjectsFooter } from './styled';

const ProjectsFooter = () => (
  <StyledProjectsFooter>
    <H3>Maybe we could build something together?</H3>
    <p>Send me a message: <a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a></p>
    <p><Link to="about">Read about me</Link></p>
  </StyledProjectsFooter>
);

export default ProjectsFooter;
