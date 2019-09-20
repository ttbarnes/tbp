import styled from 'styled-components';
import { media } from '../styledShared';

const noMargin = (props) => `
  ${props.noMargin ? `
    margin: 0;
  ` : ''}
`;

const H4 = styled.h4`
  font-size: 1.2em;
  ${media.sm`
    font-size: 1.3em;
  `}
  ${noMargin}
`;

export default H4;
