import styled, { keyframes } from 'styled-components';
import Img from 'components/Img';
import H1 from 'components/H1';
import { CONTAINER_SPACING_VERTICAL, media } from 'components/styledShared';

export const Root = styled.article`
  max-width: 650px;
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
  flex: 0 0 180px;
  ${media.sm`
    flex: 0 0 200px;
    margin-right: 20px;
  `}
  ${media.md`
    margin-right: 40px;
  `}
`;

export const StyledH2 = styled(H1)`
  margin: 0;
`;

export const ImgWrap = styled.div`
  padding-right: 1em;
`;

export const StyledImg = styled(Img)`
  max-width: 180px;
  border-radius: 50%;
  margin-bottom: 0.5em;
  ${media.md`
    max-width: 200px;
  `}
`;

export const Intro = styled.div`
  padding-top: 0.5em;
  position: relative;
`;

export const IntroP = styled.p`
  line-height: 2.2em;
  ${media.md`
    line-height: 1.5em;
  `}
`;


const fadeInImage = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const FadeInImage = styled(StyledImg)`
  ${media.sm`
    animation: ${fadeInImage} 0.4s linear;
  `}
`;

const fadeInOffset = keyframes`
  from {
    opacity: 0;
    margin-top: -2em;
  }

  to {
    opacity: 1;
    margin-top: 0;
  }
`;

export const FadeInOffset = styled.p`
  ${media.sm`
    animation: ${fadeInOffset} 0.4s linear;
    margin-top: 0;
  `}
`;
