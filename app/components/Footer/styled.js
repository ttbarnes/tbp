import styled from 'styled-components';
import { Link } from 'react-router';
import {
  media,
  CONTAINER_SPACING_HORIZONTAL,
  CONTAINER_OFFSET_LEFT
} from '../../components/styledShared';

export const Root = styled.footer`
  padding: 0 ${CONTAINER_SPACING_HORIZONTAL};
  ${media.lg`
    padding-left:${CONTAINER_OFFSET_LEFT};
  `}
`;

export const ListRoot = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  listStyleType: none;
`;

export const ListItem = styled.li`
  flexGrow: 1;
  maxWidth: 3em;
`;

export const StyledLink = styled(Link)`
  color: #CCC;
`;
