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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-left: solid .5em #F5F5F5;
  padding: 0 0 16em 0;
`;

export const Border = styled.div`
  height: 100%;
  width: 10em;
  margin-top: 1em;
  border-top: solid .5em #F5F5F5;
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  padding: 1em;
`;

export const TagList = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const TagListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding-right: .2em;
`;
