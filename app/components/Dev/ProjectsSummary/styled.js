import styled from 'styled-components';
import { media } from '../../styledShared';

export const ListRoot = styled.ul`
  margin-bottom: 2em;
  ${media.sm`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% + 2em);
    max-width: calc(100% + 2em);
    margin: 0 -1em 2em -1em;
  `}
  ${media.md`
    width: 100%;
    max-width: 100%;
    margin: 0;
    margin-bottom: 2em;
  `}
  ${media.lg`
    margin-bottom: 0;
  `}
`;

export const ListItem = styled.li`
  padding: .3em 0;
  font-size: .9em;
  ${media.sm`
    padding: .5em 0;
  `}
  ${media.sm`
    max-width: 33.333%;
    flex: 0 0 33.333%;
    padding: 1em;
    font-size: 1em;
  `}
`;

export const ListItemInner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 1em;
  background: #CCC;
  ${media.sm`
    min-height: 100px;
  `}
`;

export const ListItemCopy = styled.p`
  margin-bottom: 0;
`;
