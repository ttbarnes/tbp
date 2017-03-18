import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import {
  Root,
  FlexRoot,
  Flex,
  StyledH1,
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
        <FlexRoot>
          <Flex>
            <StyledImg src={TbImage} alt="Tony Barnes" />
          </Flex>
          <div>
            <StyledH1>Hello! I{'\''}m Tony.</StyledH1>
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
