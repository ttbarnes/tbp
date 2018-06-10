import styled from 'styled-components';
import { media } from 'components/styledShared';

export const ListItem = styled.li`
  padding: 3em 0;
  list-style-type: none;
  border-bottom: solid 3px #EDEDED;
  ${media.xs`
    padding: 5em 0;
  `}
`;
