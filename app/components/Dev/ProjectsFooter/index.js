import React from 'react';
import { Link } from 'react-router-dom';
import H3 from 'components/H3';
import { StyledProjectsFooter } from './styled';

const ProjectsFooter = () => (
  <StyledProjectsFooter>
    <H3>It{'\''}s been exciting!</H3>
    <p>Want to talk about your project? <Link to="contact">Let{'\''}s have a chat</Link></p>
    <p><Link to="about">Read about my skills</Link></p>
  </StyledProjectsFooter>
);

export default ProjectsFooter;
