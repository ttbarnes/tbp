import styled from 'styled-components';
import {
  CONTAINER_SPACING_VERTICAL,
  media
} from 'components/styledShared';
import Img from 'components/Img';
import H1 from 'components/H1';
import H2 from 'components/H2';

export const IntroRoot = styled.article`
  max-width: 695px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  margin-top: -2em;
  margin-bottom: 3em;
  ${media.sm`
    margin-bottom: 5em;
  `}
  ${media.md`
    display: flex;
    align-items: flex-start;
    text-align: left;
    margin-top: 0;
    margin-bottom: 10em;
    padding-top: ${CONTAINER_SPACING_VERTICAL};
  `}
  ${media.xlg`
    margin-bottom: 12em;
  `}
`;

export const Flex = styled.div`
  flex: 0 0 180px;
  ${media.md`
    flex: 0 0 200px;
    margin-right: 20px;
    justify-content: flex-end;
  `}
  ${media.md`
    margin-right: 40px;
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

export const ImgWrap = styled.div`
  padding-right: 1em;
`;

export const StyledImg = styled(Img)`
  max-width: 150px;
  border-radius: 50%;
  margin: 0 auto .5em auto;
  display: block;
  ${media.xs`
    max-width: 180px;
  `}
  ${media.md`
    max-width: 200px;
  `}
`;

export const Image = styled(StyledImg)`
  max-width: 150px;
  border-radius: 50%;
  margin: 0 auto .5em auto;
  display: block;
  ${media.xs`
    max-width: 180px;
  `}
  ${media.md`
    width: 100%;
    max-width: 200px;
  `}

`;

export const IntroHeadingMobileOnly = styled(H1)`
  padding: .5em 0 1.25em 0;
  text-align: center;
  ${media.md`
    display: none;
  `}
`;

export const HeadingHello = styled.span`
  display: inline-block;
`;

export const HeadingSub = styled.span`
  display: inline-block;
`;

export const Intro = styled.ul`
  padding-top: 1em;
  position: relative;
  line-height: 2.2em;
  ${media.md`
    padding-top: 0.5em;
    line-height: 1.5em;
  `}
`;

export const IntroHeading = styled.span`
  display: none;
  font-size: 1.8em;
  ${media.md`
     display: block;
     margin-bottom: .25em;
     font-size: 2em;
     font-weight: bold;
  `}
`;

export const IntroSubHeading = styled(H2)`
  font-weight: normal;
  padding: 0 1em;
  max-width: 330px;
  margin: 0 auto;
  font-size: 1em;
  ${media.xxs`
    font-size: 1.1em;
  `}
  ${media.sm`
    max-width: 500px;
    padding: 0;
  `}
  ${media.md`
    max-width: 100%;
    margin: 0 0 1em 0;
    position: relative;

  `}
  ${media.lg`
    margin-top: 0;
  `};
`;

export const IntroCopy = styled.li`
  margin-bottom: .5em;
  ${media.md`
    list-style-type: disc;
    margin-left: 1em;
  `}
`;
