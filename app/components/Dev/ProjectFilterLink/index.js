/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes, Children } from 'react';

function ProjectFilterLink(props) {
  return (
    props.currentFilter === props.type ? (
      <div onClick={() => props.onClick(props.type)}>
        {props.type} <small>(active)</small>
      </div>
    ) : (
      <div onClick={() => props.onClick(props.type)}>
        {props.type}
      </div>
    )


  );
};

ProjectFilterLink.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  currentFilter: PropTypes.string,
};

export default ProjectFilterLink;
