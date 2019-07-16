import styled from 'styled-components';
import { media } from '../../styledShared';

export const ListRoot = styled.ul`
  ${media.sm`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    max-width: 100%;
  `}
`;

export const ListItem = styled.li`
  padding: .5em 0;
  ${media.sm`
    max-width: 33.333%;
    flex: 0 0 33.333%;
    padding: 1em;
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
