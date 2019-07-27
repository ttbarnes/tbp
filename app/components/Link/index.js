import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './styled';

const Link = (props) => <StyledLink {...props} />;

Link.propTypes = {
  type: PropTypes.string
};

Link.defaultProps = {
  type: ''
};

export default Link;
