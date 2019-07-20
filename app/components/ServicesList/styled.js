import styled from 'styled-components';
import { colors, media } from '../styledShared';
import H4 from '../../components/H4';

export const Root = styled.div`
    text-align: center;
    ${media.lg2`
      width: calc(100% + 8em);
      max-width: calc(100% + 8em);
      margin: 0 -4em 2em -4em;
    `}
`;

export const StyledH4 = styled(H4)`
  font-weight: normal;
  font-size: 1.2em;
  ${media.lg2`
    min-height: 73px;
    margin-bottom: 0;
  `}
  ${media.xlg`
    min-height: initial;
    margin-bottom: 1em;
  `}
`;

export const ListRoot = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 2.5em 0;
`;

export const StyledService = styled.li`
  padding: 1em;
  width: 100%;
  ${media.sm`
    width: 50%;
  `}
  ${media.lg2`
    flex: 0 0 33.333%;
  `}
`;

export const StyledServiceInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  background: ${colors.grey2};
  text-align: center;
  ${media.lg`
    background: ${colors.blueMain};
  `}
`;

export const StyledServiceIcon = styled.span`
  font-size: 2.5em;
  padding-bottom: .25em;
  ${media.lg`
    font-size: 3.5em;
  `}
`;

export const StyledCopy = styled.div`
  ${media.sm`
    min-height: 73px;
    margin-bottom: 0;
  `}
  ${media.lg2`
    min-height: 102px;
    display: flex;
    width: 100%;
    align-items: center;
  `}
  ${media.xlg`
    min-height: initial;
  `}
`;
