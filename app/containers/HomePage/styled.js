import styled from 'styled-components';
import Img from 'components/Img';
import H1 from 'components/H1';
import { CONTAINER_SPACING_VERTICAL, media } from 'components/styledShared';

export const Root = styled.article`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  padding-top: ${CONTAINER_SPACING_VERTICAL};
`;

export const FlexRoot = styled.article`
  text-align: center;
  align-items: center;
  ${media.sm`
    display: flex;
    text-align: left;
  `}
`;

export const Flex = styled.div`
  flex: 0 0 160px;
  ${media.md`
    flex: 0 0 175px;
  `}
`;

export const StyledH2 = styled(H1)`
  margin: 0;
`;

export const StyledImg = styled(Img)`
  max-width: 150px;
  border-radius: 50%;
  padding-right: 1em;
  margin-bottom: 0.5em;
`;

export const Intro = styled.div`
  padding-top: 0.5em;
`;
