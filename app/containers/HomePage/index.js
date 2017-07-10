import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import H1 from 'components/H1';
import {
  StyledP,
  Root,
  FlexRoot,
  FlexRootIntro,
  Flex,
  StyledH2,
  StyledImg,
  Intro,
  IntroP
} from './styled';
import TbImage from '../../assets/img/tony-barnes.jpg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Root>
        <Helmet
          title="Front end developer, techy, musician"
          meta={[
            { name: 'description', content: 'JavaScript developer, musician, cyclist, FPV pilot, tea drinker.' },
          ]}
        />
        <H1 hide>Tony Barnes</H1>
        <FlexRootIntro>
          <Flex>
            <StyledImg src={TbImage} alt="Tony Barnes" />
          </Flex>
          <div>
            <StyledH2>Hello! I{'\''}m Tony.</StyledH2>
            <StyledP>Developer, musician, cyclist, FPV pilot, tea drinker.</StyledP>
          </div>
        </FlexRootIntro>

        <FlexRoot>
          <Flex></Flex>
          <Intro>
            <IntroP>Read <Link to="about">about me</Link>, <br />check out <Link to="projects">my projects</Link>, <br />or see <Link to="hobbies">what else I get up to.</Link></IntroP>
          </Intro>
        </FlexRoot>
      </Root>
    );
  }
}

export default HomePage;
