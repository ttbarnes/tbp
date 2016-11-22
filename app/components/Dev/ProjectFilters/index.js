/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';
import Wrapper from './Wrapper';
import ProjectFilterLink from 'components/dev/ProjectFilterLink'

function ProjectFilters(props) {

  return (

    <Wrapper>

      <p>filter by:</p>

      <ProjectFilterLink onClick={props.onClick} type="All" currentFilter={props.activeFilter}></ProjectFilterLink>

      <ProjectFilterLink onClick={props.onClick} type="React" currentFilter={props.activeFilter}></ProjectFilterLink>

      <ProjectFilterLink onClick={props.onClick} type="Angular" currentFilter={props.activeFilter}></ProjectFilterLink>

      <ProjectFilterLink onClick={props.onClick} type="Static" currentFilter={props.activeFilter}></ProjectFilterLink>

      <ProjectFilterLink onClick={props.onClick} type="Other" currentFilter={props.activeFilter}></ProjectFilterLink>

    </Wrapper>
  );
};

ProjectFilters.propTypes = {
  onClick: PropTypes.func,
  activeFilter: PropTypes.string,
};


export default ProjectFilters;
