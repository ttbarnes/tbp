/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import styled from 'styled-components';

const ListItem = (props) => {
  return (
    <li>
      {props.title} <small>( {props.category} )</small>
    </li>
  )
};

ListItem.propTypes = {
  title: React.PropTypes.string,
  category: React.PropTypes.string,
}

export default ListItem;
