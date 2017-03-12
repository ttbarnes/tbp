import React, { PropTypes } from 'react';
import { UL, LI } from './styled';

function List(props) {
  if (!props.children) {
    return null;
  }

  const items = props.children.map((item, index) => (
    <LI key={`item-${index}`}>{item}</LI>
  ));

  return (
    <UL>
      {items}
    </UL>
  );
}

export default List;

List.propTypes = {
  children: PropTypes.array.isRequired
};

