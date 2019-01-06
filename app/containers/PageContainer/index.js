import React from 'react';
import PropTypes from 'prop-types';
import { StyledPageContainer } from './styled';

const PageContainer = ({ children }) => (
  <StyledPageContainer>
    {children}
  </StyledPageContainer>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContainer;
