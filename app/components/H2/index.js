import styled from 'styled-components';
import { media } from '../../components/styledShared';

const H2 = styled.h2`
  margin-top: 1em;
  font-size: 1.5em;
  ${media.lg`
    margin-top: 0;
  `};
`;

export default H2;
