import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import H1 from 'components/H1';
import {
  Root,
  FlexRootIntro,
  Flex,
  StyledH2,
  HeadingHello,
  HeadingSub,
  Intro,
  FadeInImage,
  StyledTitles,
  IntroCopy
} from './styled';
import TbImage from '../../assets/img/tony-barnes.jpg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Root>
        <Helmet
          title="Freelance Front End, Full Stack JavaScript Developer"
          meta={[
            { name: 'description', content: 'Freelance developer, London' },
          ]}
        />
        <H1 hide>Tony Barnes</H1>
        <FlexRootIntro>
          <Flex>
            <FadeInImage src={TbImage} alt="Tony Barnes" />
          </Flex>
          <div>
            <StyledH2>
              <HeadingHello>Hello!&nbsp;</HeadingHello>
              <HeadingSub>I{'\''}m Tony.</HeadingSub>
            </StyledH2>
            {/*
              <StyledTitles>Developer, musician, cyclist, FPV pilot, tea drinker.</StyledTitles>
            */}
            <StyledTitles>
              A Freelance, Front End/Full Stack JavaScript Developer
            </StyledTitles>
            <Intro>
              <IntroCopy index="0">Read <Link to="about">about me</Link> <br /></IntroCopy>
              <IntroCopy index="1">See <Link to="projects">what i{'\''}ve been up to</Link></IntroCopy>
            </Intro>
          </div>
        </FlexRootIntro>
      </Root>
    );
  }
}

export default HomePage;
