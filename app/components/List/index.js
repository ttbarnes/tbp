import React, { PropTypes } from 'react';
import { UL, LI } from './styled';

function List(props) {
  const {
    children
  } = props;
  if (!children) {
    return null;
  }
  let items;

  if (children.length > 0) {
    items = children.map((item, index) => (
      <LI key={`item-${index}`}>{item}</LI>
    ));
    return (
      <UL {...props}>
        {items}
      </UL>
    );
  } else if (children.length === 0) {
    items = children[0];
    return (
      <UL {...props}>
        {items}
      </UL>
    );
  }
  return null;
}

export default List;

List.propTypes = {
  children: PropTypes.array,
  showListStyle: PropTypes.bool // eslint-disable-line react/no-unused-prop-types
};

