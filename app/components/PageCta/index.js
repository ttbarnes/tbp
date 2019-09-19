import React from 'react';
import PropTypes from 'prop-types';
import H3 from 'components/H3';
import { StyledPageCta } from './styled';

const PageCta = ({
  heading,
  contactCopy,
  secondCta,
  centerText,
  noMargin,
  noMarginOnSmallScreen
}) => (
  <StyledPageCta
    centerText={centerText}
    noMargin={noMargin}
    noMarginOnSmallScreen={noMarginOnSmallScreen}
  >
    <H3>{heading}</H3>
    <p>{contactCopy}: <a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a></p>
    {secondCta && secondCta}
  </StyledPageCta>
);

PageCta.propTypes = {
  heading: PropTypes.string.isRequired,
  contactCopy: PropTypes.string.isRequired,
  secondCta: PropTypes.element,
  centerText: PropTypes.bool,
  noMargin: PropTypes.bool,
  noMarginOnSmallScreen: PropTypes.bool
};

PageCta.defaultProps = {
  secondCta: null,
  centerText: false,
  noMargin: false,
  noMarginOnSmallScreen: false
};

export default PageCta;
