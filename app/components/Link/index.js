import React, { PropTypes } from 'react';
import StyledLink from './styled';

const Link = (props) => <StyledLink {...props} />;

Link.propTypes = {
  type: PropTypes.string
};

export default Link;

