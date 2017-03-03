import styled from 'styled-components';
import { Link } from 'react-router';
import { buttonHover } from '../../styledShared';

export const ListRoot = styled.ul`
  clear: both;
  display: flex;
  flexFlow: row wrap;
  listStyleType: none;
`;

export const StyledListItem = styled.li`
  flexGrow: 1;
  display: flex;
  alignItems: center;
  justifyContent: center;
  background: #CCC;
  border: solid 3px #EEE;
  minWidth: 200px;
  maxWidth: 200px;
  minHeight: 110px;
  textAlign: center;
  ${buttonHover}
`;

export const StyledListItemLink = styled(Link)`
  display: block;
  color: #000;
  padding: 1em;
  textDecoration: none;
`;
