import React from 'react';
import PropTypes from 'prop-types';
import { StyledPageContainer } from './styled';

const PageContainer = ({ children, smallWidth }) => (
  <StyledPageContainer smallWidth={smallWidth}>
    {children}
  </StyledPageContainer>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  smallWidth: PropTypes.bool
};

PageContainer.defaultProps = {
  smallWidth: false
};

export default PageContainer;
