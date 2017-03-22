import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import H1 from 'components/H1';
import {
  Root,
  FlexRoot,
  Flex,
  StyledH2,
  StyledImg,
  Intro
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
        <FlexRoot>
          <Flex>
            <StyledImg src={TbImage} alt="Tony Barnes" />
          </Flex>
          <div>
            <StyledH2>Hello! I{'\''}m Tony.</StyledH2>
            <p>Developer, musician, cyclist, FPV pilot, tea drinker.</p>
          </div>
        </FlexRoot>

        <FlexRoot>
          <Flex></Flex>
          <Intro>
            <p>Read <Link to="about">about me</Link>, <br />check out <Link to="projects">my projects</Link>, <br />or see <Link to="hobbies">what else I get up to.</Link></p>
          </Intro>
        </FlexRoot>
      </Root>
    );
  }
}

export default HomePage;
