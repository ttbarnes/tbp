import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tag from 'components/Tag';
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
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  justify-content: flex-start;
  margin: 0 -0.7em; /* counter ListItem padding */
`;

export const StyledListItem = styled.li`
  flex: 1 0 150px;
  padding: 0.3em;
  max-width: 50%;
  ${media.sm`
    flex: 1 0 180px;
  `}
  ${media.md`
    flex: 1 0 199px;
    max-width: 100%;
  `}
  ${media.lg`
    flex: 1 0 150px;
  `}
  ${media.xlg`
    flex: 1 0 199px;
    max-width: 199px;
  `}
`;

export const StyledImg = styled.img`
  opacity: 1;
  width: 100%;
  transition: all 0.2s ease;
  ${media.md`
    opacity: .7;
  `}
`;

export const StyledListItemNoLink = styled.div`
  {StyledListItemInner}
`;

export const StyledListItemLink = styled(Link)`
  {StyledListItemInner}
  display: block;
  position: relative;
  text-decoration: none;
  ${media.lg`
    &:hover {
      z-index: 3;
      img {
        opacity: 1;
        transform: scale(1.12);
        box-shadow: 0 0.4em 1em #000;
      }
      div {
        right: -1em;
        bottom: -1em;
        opacity: 0;
      }
    }
  `}
`;

export const StyledTag = styled(Tag)`
  display: none;
  ${media.sm`
    transition: all 0.4s ease;
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    margin: 0;
    justify-content: center;
    font-size: .8em;
    width: auto;
    bottom: -0.25em;
    right: -0.25em;
  `}
  ${media.md`
    display: blocK;
  `}
`;
