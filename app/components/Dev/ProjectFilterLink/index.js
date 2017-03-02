/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes } from 'react';
import styles from './styles';

function ProjectFilterLink(props) {
  return (
    props.currentFilter === props.type ? (
      <button onClick={() => props.onClick(props.type)} style={styles.filterLinkActive}>
        {props.type}
      </button>
    ) : (
      <button onClick={() => props.onClick(props.type)} style={styles.filterLink}>
        {props.type}
      </button>
    )
  );
}

ProjectFilterLink.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  currentFilter: PropTypes.string,
};

export default ProjectFilterLink;
