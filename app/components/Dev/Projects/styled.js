import styled from 'styled-components';
import { Link } from 'react-router';
import Tag from 'components/Tag';

export const ListRoot = styled.ul`
  clear: both;
  display: flex;
  flexFlow: row wrap;
  listStyleType: none;
  margin: 0 -0.7em; /* counter ListItem padding */
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
  position: relative;
  padding: 0.7em;
  minWidth: 200px;
  maxWidth: 200px;
  minHeight: 110px;
  textAlign: center;
`;

export const StyledImg = styled.img`
  opacity: .8;
  transition: all 0.2s ease;
`;

export const StyledListItemNoLink = styled.div`
  {StyledListItemInner}
`;

export const StyledListItemLink = styled(Link)`
  {StyledListItemInner}
  &:hover img {
    opacity: 1;
    transform: scale(1.12);
  }
`;

export const StyledTag = styled(Tag)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
