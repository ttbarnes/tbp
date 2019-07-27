import styled from 'styled-components';
import { colors, media } from '../styledShared';
import H4 from '../H4';

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
  width: 100%;
  ${media.lg2`
    min-height: 73px;
    margin-bottom: 0;
  `}
  ${media.xlg`
    min-height: auto;
    margin-bottom: 1em;
  `}
`;

export const ListRoot = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin: 1.5em 0;
    ${media.sm`
      margin: 2.5em 0;
    `}
`;

export const StyledService = styled.li`
  padding: 1em;
  width: 100%;
  ${media.sm`
    width: 50%;
    max-width: 50%;
  `}
  ${media.lg2`
    flex: 0 0 33.333%;
    width: 33.333%;
    max-width: 33.333%;
  `}
`;

export const StyledServiceInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 1em;
  background: ${colors.grey2};
  text-align: center;
  ${media.lg`
    background: ${colors.blueMain};
  `}
`;

export const StyledIcon = styled.img`
  margin-bottom: 1em;
`;

export const StyledCopy = styled.div`
  width: 100%;
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
    min-height: auto;
  `}
`;
