import styled, { keyframes } from 'styled-components';
import Tag from 'components/Tag';
import { media, colors } from '../styledShared';

const isLastGroupAnimation = (props) => `
  ${(props.isLast && props.largeGroupHeight) && `
    animation: none;
  `}
`;

const isLastGroupMarginLargeBreakPoint = (props) => `
  ${props.isLast && `
    margin-top: -5em;
  `}
`;

const groupFadeInShort = keyframes`
  0% {
    opacity: 0;
    margin-top: 0;
  }

  50% {
    opacity: 0.2;
    margin-top: -2.5em;
  }

  100% {
    opacity: 1;
    margin-top: -5em;
  }
`;

export const GroupFadeInShort = styled.div`
  ${media.md`
    animation: ${groupFadeInShort} 0.6s linear;
    margin-top: -5em;
    position: relative;
  `}
`;

const groupFadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: 0;
  }
  50% {
    opacity: 0.2;
    margin-top: -8em;
  }
  100% {
    opacity: 1;
    margin-top: -13em;
  }
`;

export const GroupFadeIn = styled.div`
  ${media.md`
    animation: ${groupFadeIn} 0.6s linear;
    margin-top: -13em;
    position: relative;
  `};
  ${isLastGroupAnimation}
  ${media.lg`
    ${isLastGroupMarginLargeBreakPoint}
  `};
`;


export const Root = styled.li`
  list-style-type: none;
`;

const rootIslargeGroupHeight = (props) => `
  ${props.largeGroupHeight && `
    padding-bottom: 13em;
  `}
`;

const rootIsLast = (props) => `
  ${(props.isLast && props.largeGroupHeight) && 'padding-bottom: 5em;'}
`;

export const GroupRoot = styled.li`
  position: relative;
  padding: 1em 0;
  list-style-type: none;
  ${media.md`
    padding: 0 0 7em 0;
    ${rootIslargeGroupHeight}
    ${rootIsLast}
  `};
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
    margin: 17em -6em 0 2.5em;
  `}
`;

export const ListRoot = styled.ul`
  ${media.md`
    margin-top: 5em;
    ${listRootIsLargeGroupHeightMediumBreakpoint}
  `}
  ${media.lg`
    margin: 5em -6em 0 2.5em;
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
  flex-direction: row;
  align-items: center;
  width: 100%;
  ${media.lg`
    justify-content: center;
  `}
`;

const alwaysMargin = (props) => `
  ${props.alwaysMargin && `
    margin-bottom: 2em;
  `}
`;

export const Heading = styled.p`
  font-size: 1.3em;
  text-decoration: underline;
  ${alwaysMargin}
  ${media.md`
    font-size: 1.5em;
  `}
  ${media.lg`
    margin-bottom: 0;
    text-decoration: none;
  `}
`;

const isLastItem = (props) => `
  ${props.isLast && `
    padding-top: 0;
    padding-bottom: 0;
  `}
`;

const listItemIslargeGroupHeight = (props) => `
  ${props.largeGroupHeight && `
    padding: 5em 0 15em 0;
  `}
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  ${media.lg`
    border-left: solid .5em #F5F5F5;
    padding: 5em 0 10em 0;
    ${listItemIslargeGroupHeight}
    ${isLastItem}
  `}
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
  margin-bottom: 3em;
  ${media.lg`
    margin-bottom: 0;
  `}
`;

export const TagListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-right: .2em;
`;

export const Copy = styled.p`
  font-size: 80%;
  line-height: initial;
  margin: .1em 0 1em 0;
  color: #ACACAC;
`;
