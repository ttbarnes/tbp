import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import H1 from 'components/H1';
import {
  StyledP,
  Root,
  FlexRootIntro,
  Flex,
  StyledH2,
  Intro,
  IntroP,
  FadeInImage,
  FadeInOffset
} from './styled';
import TbImage from '../../assets/img/tony-barnes.jpg';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Root>
        <Helmet
          title="Front end JavaScript developer, techy, musician"
          meta={[
            { name: 'description', content: 'JavaScript developer, musician, cyclist, FPV pilot, tea drinker.' },
          ]}
        />
        <H1 hide>Tony Barnes</H1>
        <FlexRootIntro>
          <Flex>
            <FadeInImage src={TbImage} alt="Tony Barnes" />
          </Flex>
          <div>
            <StyledH2>Hello! I{'\''}m Tony.</StyledH2>
            <StyledP>Developer, musician, cyclist, FPV pilot, tea drinker.</StyledP>
            <Intro>
              <IntroP>
                <FadeInOffset>Read <Link to="about">about me</Link>, <br /></FadeInOffset>
                <FadeInOffset>check out <Link to="projects">my projects</Link>, <br /></FadeInOffset>
                <FadeInOffset>or see <Link to="hobbies">what else I get up to.</Link></FadeInOffset>
              </IntroP>
            </Intro>
          </div>
        </FlexRootIntro>
      </Root>
    );
  }
}

export default HomePage;
