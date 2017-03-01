/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import { Link } from 'react-router';
import styles from './styles';

const ListItem = (props) =>
  <li style={styles.listItem}>
    <Link to={`dev/project/${props.id}`} onClick={() => props.onClick(props.id)} style={styles.link}>
      {props.name}
    </Link>
  </li>
;

ListItem.propTypes = {
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default ListItem;
