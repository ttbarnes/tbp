import styled from 'styled-components';
import { media } from 'components/styledShared';

const handleNoMargin = (props) => {
  const { noMargin } = props;
  if (noMargin) {
    return 'margin: 0;';
  }
  return null;
};

const handleNoMarginOnSmallScreen = (props) => {
  const { noMarginOnSmallScreen } = props;
  if (noMarginOnSmallScreen) {
    return 'margin: 0;';
  }
  return null;
};

const centerText = (props) => {
  if (props.centerText) {
    return 'text-align: center;';
  }
  return '';
};

const marginLargeBreakpoint = (props) => {
  if (!props.noMargin) {
    return 'margin: 9em 0 7em 0;';
  }
  return '';
};

export const StyledPageCta = styled.div`
  ${centerText};
  margin: 2em 0 5em 0;
  ${handleNoMarginOnSmallScreen};

  ${handleNoMargin};
  ${media.lg`
      ${marginLargeBreakpoint};
  `};
`;
