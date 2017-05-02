import styled from 'styled-components';
import { media } from 'components/styledShared';

const listStyleType = (props) => `
  ${props.showListStyle && `
    list-style-type: disc;
    margin-left: 1.2em;
    ${media.md`
      margin-left: 0 !important;
    `}
  `};
`;

export const UL = styled.ul`
  ${listStyleType}
`;

export const LI = styled.li`
  margin-bottom: 1em;
`;
