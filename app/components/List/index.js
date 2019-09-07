import React from 'react';
import PropTypes from 'prop-types';

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
  }
  if (children.length === 0) {
    return (
      <UL {...props}>
        {children[0]}
      </UL>
    );
  }
  return null;
}

export default List;

List.propTypes = {
  children: PropTypes.array
};

List.defaultProps = {
  children: null
};
