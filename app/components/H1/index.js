import styled from 'styled-components';
import { media } from 'components/styledShared';

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0.25em;
  font-size: 1.8em;
  ${media.xxs`
    font-size: 2em;
  `}
`;

export default H1;
