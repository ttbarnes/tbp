import React from 'react';
import PropTypes from 'prop-types';

import StyledTag from './styled';

const Tag = (props) => {
  const { type } = props;

  if (!type) {
    return null;
  }
  return (
    <StyledTag
      {...props}
      className="tech-tag"
    >{type}
    </StyledTag>
  );
};

Tag.propTypes = {
  type: PropTypes.string.isRequired
};

export default Tag;
