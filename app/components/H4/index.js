import styled from 'styled-components';
import { media } from '../styledShared';

const H4 = styled.h4`
  font-size: 1.2em;
  ${media.sm`
    font-size: 1.4em;
  `}
`;

export default H4;
