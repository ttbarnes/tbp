import styled from 'styled-components';
import { media } from '../styledShared';

const noMargin = (props) => `
  ${props.noMargin && `
    margin: 0;
  `}
`;

const mobileOnly = (props) => `
  ${props.mobileOnly && `
    display: none;
  `}
`;

const H3 = styled.h3`
  font-size: 1.2em;
  ${media.sm`
    font-size: 1.5em;
    ${mobileOnly}
  `}
  ${noMargin}
`;

export default H3;
