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
    align-items: flex-start;
    text-align: left;
    margin-top: 0;
  `}
`;

export const Flex = styled.div`
  flex: 0 0 180px;
  ${media.sm`
    flex: 0 0 200px;
    margin-right: 20px;
    justify-content: flex-end;
  `}
  ${media.md`
    margin-right: 40px;
  `}
`;

export const ImgWrap = styled.div`
  padding-right: 1em;
`;

export const StyledImg = styled(Img)`
  max-width: 180px;
  border-radius: 50%;
  margin: 0 auto .5em auto;
  display: block;
  ${media.md`
    max-width: 200px;
  `}
`;

const ImageKeyFrames = keyframes`
  from, 50% {
    opacity: 0;
    transform: rotate(-360deg);
  }
  65% {
    opacity: 0;
  }
  from, 50% {
    width: 5%;
  }
  70% {
    opacity: 0;
  }
  85% {
    width: 15%;
  }
  to {
    opacity: 1;
    width: 100%;
    margin-top: 0;
    margin-left: 0;
  }
`;

export const FadeInImage = styled(StyledImg)`
  ${media.sm`
    animation: ${ImageKeyFrames} 1.3s linear;
    transition: all 1.3s ease;
    width: 100%;
  `}
`;

export const StyledH2 = styled(H1)`
  margin: 0;
  padding-top: .2em;
`;

const HeadingHelloKeyFrames = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    opacity: 1;
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    transform: translateX(1px) rotate(0);
  }
  100% {
    transform: translateX(-1px) rotate(0);
  }
}
`;

export const HeadingHello = styled.span`
  display: inline-block;
  transition: all .6s ease;
  ${media.sm`
    animation: ${HeadingHelloKeyFrames} .6s linear;
  `}
`;

const HeadingSubKeyFrames = keyframes`
  from, 50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeadingSub = styled.span`
  display: inline-block;
  transition: all 1s ease;
  ${media.sm`
    animation: ${HeadingSubKeyFrames} 1s linear;
  `}
`;

export const Intro = styled.div`
  padding-top: 1em;
  position: relative;
  line-height: 2.2em;
  ${media.md`
    padding-top: 0.5em;
    line-height: 1.5em;
  `}
`;

const styledTitlesKeyFrames = keyframes`
  from, 50%, 85% {
    opacity: 0;
    bottom: -3em;
  }
  to {
    opacity: 1;
    bottom: 0;
  }
`;

export const StyledTitles = styled.p`
  ${media.sm`
    position: relative;
    animation: ${styledTitlesKeyFrames} 1.3s linear;
    transition: all 1.5s ease;
  `}
`;

const introCopyKeyFrames = keyframes`
  from, 50%, 80% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const IntroCopy = styled.p`
  ${media.sm`
    animation: ${introCopyKeyFrames} 3s linear;
    margin-bottom: 0;
  `}
`;
