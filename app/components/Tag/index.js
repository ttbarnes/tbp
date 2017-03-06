import React, { PropTypes } from 'react';
import StyledTag from './styled';

const Tag = (props) => {
  if (!props.type) {
    return null;
  }
  return (
    <StyledTag {...props}>{props.type}</StyledTag>
  );
};

Tag.propTypes = {
  type: PropTypes.string
};

export default Tag;
