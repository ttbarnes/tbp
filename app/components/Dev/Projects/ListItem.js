/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import styles from './styles';

const ListItem = (props) => {
  return (
    <li style={styles.listItem}>
      <Link to={`dev/project/${props.id}`} onClick={() => props.onClick(props.id)} style={styles.link}>
        {props.title}
      </Link>
    </li>
  )
};

ListItem.propTypes = {
  title: React.PropTypes.string,
  category: React.PropTypes.string,
  id: React.PropTypes.number,
  onClick: React.PropTypes.func,
}

export default ListItem;
