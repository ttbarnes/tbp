import React, { PropTypes } from 'react';

import Item from './Item';

function ListItem(props) {
  return (
    <Item>
      {props.children}
    </Item>
  );
}

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
