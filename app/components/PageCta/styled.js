import styled from 'styled-components';
import { media } from 'components/styledShared';

const noMargin = (props) => `
  ${props.noMargin && `
    margin: 0;
  `};
`;

const centerText = (props) => `
  ${props.centerText && `
    text-align: center;
  `}
`;


export const StyledPageCta = styled.div`
  ${centerText}
  margin: 2em 0 5em 0;
  ${media.lg`
    margin: 9em 0 7em 0;
  `};
  ${noMargin}
`;
