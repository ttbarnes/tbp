import styled from 'styled-components';
import { colors, media } from '../styledShared';

export const ListRoot = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% + 2em);
    max-width: calc(100% + 2em);
    margin: 0 -1em 2em -1em;
`;

export const StyledService = styled.li`
  padding: 1em;
  width: 100%;
  ${media.sm`
    width: 50%;
  `}
  ${media.md`
    flex: 0 0 33.333%;
  `}
`;

export const StyledServiceInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  background: ${colors.blueMain};
  text-align: center;
`;

export const StyledServiceIcon = styled.img`
  max-width: 90px;
`;
