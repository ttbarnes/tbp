import styled from 'styled-components';
import { colors, media } from '../styledShared';
import H4 from '../../components/H4';

export const Root = styled.div`
    width: calc(100% + 8em);
    max-width: calc(100% + 8em);
    margin: 0 -4em 2em -4em;
    text-align: center;
`;

export const StyledH4 = styled(H4)`
  font-weight: normal;
  font-size: 1.2em;
`;

export const ListRoot = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 3.5em 0;
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

export const StyledServiceIcon = styled.span`
  font-size: 3.5em;
`;
