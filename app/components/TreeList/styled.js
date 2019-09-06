import styled from 'styled-components';
import Tag from 'components/Tag';
import { media, colors } from '../styledShared';

export const Root = styled.li`
  position: relative;
  padding: 1em 0;
  list-style-type: none;
  ${media.lg`
    padding: 0;
  `}
`;

const listRootIsLargeGroupHeightMediumBreakpoint = (props) => `
  ${props.largeGroupHeight && `
    margin: 14em 0 0 0;
  `}
`;

const listRootIsLargeGroupHeightLargeBreakpoint = (props) => `
  ${props.largeGroupHeight && `
    margin: 17em -8em 0 2.5em;
  `}
`;

export const ListRoot = styled.ul`
  ${media.md`
    margin-top: 5em;
    ${listRootIsLargeGroupHeightMediumBreakpoint}
  `}
  ${media.lg`
    margin: 5em -8em 0 2.5em;
    ${listRootIsLargeGroupHeightLargeBreakpoint}
  `}
`;

export const HeadingColumn = styled.div`
  ${media.lg`
    background: #FFF;
    transform: translateX(-40%);
    padding: 1.5em 0;
    display: inline-flex;
  `}
`;

export const HeadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Heading = styled.p`
  font-size: 1.5em;
  margin-bottom: 2em;
  text-decoration: underline;
  ${media.lg`
    margin-bottom: 0;
    text-decoration: none;
  `}
`;

export const SubHeading = styled.p`
  margin-bottom: 0;
  font-size: .8em;
  display: none;
  ${media.lg`
    display: block;
  `}
`;

const isLastItem = (props) => `
  ${props.isLast && `
    padding-bottom: 4.5em;
  `}
`;

const listItemIslargeGroupHeight = (props) => `
  ${props.largeGroupHeight && `
    ${media.md`
      padding: 5em 0 20em 0;
    `}
  `}
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  ${media.md`
    padding: 5em 0 10em 0;
  `}
  ${media.lg`
    border-left: solid .5em #F5F5F5;
  `}
  ${isLastItem}
  ${listItemIslargeGroupHeight}
`;

export const Border = styled.div`
  ${media.lg`
    width: 20%;
    height: 100%;
    margin-top: 1em;
    border-top: solid .5em #F5F5F5;
  `}
`;

export const GroupItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 15%;
  ${media.sm`
    margin-bottom: 10%;
  `}
  ${media.lg`
    margin-bottom: 5%;
  `}
  ${media.lg`
    flex-direction: column;
    flex: 0 0 45%;
    margin: 0 5% 10% 0;
  `}
`;

export const ListItemContent = styled.div`
  background: #F5F5F5;
  padding: 1em;
  width: 100%;
  min-height: 124px;
  position: relative;
  font-size: .95em;
  ${media.lg`
    font-size: 1em;
  `}
`;

export const ProjectHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListItemFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ProjectLink = styled.a`
  display: none;
  ${media.lg`
    padding: .2em;
    font-size: .8em;
    color: #B3B3B3;
    &:hover,
    &:focus {
      color: ${colors.blue4}
    }
  `}
`;

export const PrimaryTechTag = styled(Tag)`
  position: absolute;
  top: -2.4em;
  right: 0;
  margin: 0;
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
  margin: .1em 0 1em 0;
  color: #ACACAC;
`;
