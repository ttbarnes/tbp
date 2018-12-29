import styled from 'styled-components';
// import { media } from '../../styledShared';

export const Root = styled.div`
  position: relative;
`;

export const ListRoot = styled.ul`
  margin: 0 -8em;
`;

export const HeadingYear = styled.p`
  font-size: 1.5em;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-left: solid .5em #F5F5F5;
  padding: 0;
`;

export const Border = styled.div`
  height: 100%;
  width: 20%;
  margin-top: 1em;
  border-top: solid .5em #F5F5F5;
`;

export const YearProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 0 0 45%;
  flex-direction: column;
  margin: 0 5% 5% 0;
`;

export const ListItemContent = styled.div`
  background: #F5F5F5;
  padding: 1em;
`;

export const TagList = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const TagListItem = styled.li`
  display: flex;
  flex-direction: row;
`;
