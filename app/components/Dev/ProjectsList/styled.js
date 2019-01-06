import styled from 'styled-components';
import { media } from '../../styledShared';

export const Root = styled.div`
  position: relative;
`;

export const ListRoot = styled.ul`
  ${media.lg`
    margin: 28em -8em 0 2.5em;
  `}
`;

export const HeadingYearColumn = styled.div`
  ${media.lg`
    background: #FFF;
    transform: translateX(-40%);
    padding: 1.5em 0;
    display: inline-flex;
  `}
`;

export const HeadingYearContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeadingYear = styled.p`
  font-size: 1.5em;
  margin-bottom: 0;
`;

export const HeadingYearSub = styled.p`
  margin-bottom: 0;
  font-size: .8em;
`;

const isLastItem = (props) => `
  ${props.isLast && `
    padding-bottom: 0;
  `}
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-left: solid .5em #F5F5F5;
  padding: 5em 0;
  ${media.lg`
    padding-bottom: 30em;
  `}
  ${isLastItem}
`;

export const Border = styled.div`
  ${media.lg`
    width: 20%;
    height: 100%;
    margin-top: 1em;
    border-top: solid .5em #F5F5F5;
  `}
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
  flex-direction: row;
  margin-bottom: 5%;
  &:before {
      content: '';
      display: block;
      border-top: solid .5em #F5F5F5;
      margin-top: .5em;
      width: 100%;
      max-width: 5%;
      ${media.lg`
        display: none;
      `}
  }
  ${media.lg`
    flex-direction: column;
    flex: 0 0 45%;
    margin: 0 5% 5% 0;
  `}
`;

export const ListItemContent = styled.div`
  background: #F5F5F5;
  padding: 1em;
  min-height: 124px;
`;

export const ProjectHeading = styled.div`
  margin-bottom: .5em;
`;

export const ProjectLink = styled.a`
  display: flex;
  width: 100%;
  margin-top: .5em;
`;

export const TagList = styled.ul`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export const TagListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-right: .2em;
`;

export const ProjectIndustry = styled.p`
  font-size: 80%;
  line-height: initial;
  margin-top: .1em;
`;
