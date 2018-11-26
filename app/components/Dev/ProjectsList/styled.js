import styled from 'styled-components';
import { media } from '../../styledShared';

export const Root = styled.div`
  clear: both;
  display: flex;
  justify-content: center;
  ${media.xlg`
    padding: 0 0.4em
  `}
`;

export const ListRoot = styled.ul`
  margin: 0 -0.7em; /* counter ListItem padding */
`;

export const StyledListItem = styled.li`
  padding: 0.3em;
`;
