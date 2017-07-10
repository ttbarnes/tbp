import styled from 'styled-components';
import Img from 'components/Img';
import H1 from 'components/H1';
import { CONTAINER_SPACING_VERTICAL, media } from 'components/styledShared';

export const Root = styled.article`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  ${media.md`
    padding-top: ${CONTAINER_SPACING_VERTICAL};
  `}
`;

export const StyledP = styled.p`
  max-width: 70%;
  margin-right: auto;
  margin-left: auto;
  ${media.xxxs`
    max-width: 63%;
  `}
  ${media.xxs`
    max-width: 100%;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  `}
`;

export const FlexRoot = styled.article`
  text-align: center;
  align-items: center;
  ${media.sm`
    display: flex;
    text-align: left;
  `}
`;

export const FlexRootIntro = styled.article`
text-align: center;
  align-items: center;
  margin-top: -2em;
  ${media.sm`
    display: flex;
    text-align: left;
    margin-top: 0;
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

export const ImgWrap = styled.div`
  padding-right: 1em;
`;

export const StyledImg = styled(Img)`
  max-width: 130px;
  border-radius: 50%;
  margin-bottom: 0.5em;
`;

export const Intro = styled.div`
  padding-top: 0.5em;
`;

export const IntroP = styled.p`
  line-height: 2.2em;
  ${media.md`
    line-height: 1.5em;
  `}
`;
