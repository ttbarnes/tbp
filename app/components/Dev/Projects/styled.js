import styled from 'styled-components';
import { Link } from 'react-router';

export const ListRoot = styled.ul`
  clear: both;
  display: flex;
  flexFlow: row wrap;
  listStyleType: none;
`;

export const StyledListItemInner = `
  padding: 0.5em;
  display: block;
  color: #000;
  textDecoration: none;
`;

export const StyledListItem = styled.li`
  flexGrow: 1;
  display: flex;
  alignItems: center;
  justifyContent: center;
  minWidth: 200px;
  maxWidth: 200px;
  minHeight: 110px;
  textAlign: center;
  opacity: .8;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1; 
  }
`;

export const StyledListItemNoLink = styled.div`
  {StyledListItemInner}
`;

export const StyledListItemLink = styled(Link)`
  {StyledListItemInner}
`;
