import styled from 'styled-components';
import { Link } from 'react-router';

export const Root = styled.footer`
  background: #333;
  color: #FFF;
  padding: 1em 0;
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
  color: #FFF;
`;
