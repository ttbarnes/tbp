import React from 'react';
import H3 from 'components/H3';
import { StyledProjectsFooter } from './styled';

const ProjectsFooter = () => (
  <StyledProjectsFooter>
    <H3>It{'\''}s been exciting!</H3>
    <p>Want to talk about your project? <a href="/contact">Let{'\''}s have a chat</a></p>
    <p><a href="/about">Read about my skills</a></p>
  </StyledProjectsFooter>
);

export default ProjectsFooter;
