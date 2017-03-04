import React from 'react';
import Helmet from 'react-helmet';
import H1 from '../../components/H1';
import {
  HomeBoxRoot,
  HomeBox,
  StyledLink
} from './styled';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>
        <Helmet
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />

        <H1>Tony Barnes</H1>
        <p>JavaScript developer, musician, cyclist, FPV pilot, tea drinker.</p>

        <br />

        <HomeBoxRoot>
          <HomeBox>
            <StyledLink to="/dev">dev</StyledLink>
          </HomeBox>
          <HomeBox>
            <StyledLink to="/music">music</StyledLink>
          </HomeBox>
          <HomeBox>
            <StyledLink to="/fpv">fpv</StyledLink>
          </HomeBox>
          <HomeBox>
            <StyledLink to="/timelapse">timelapse</StyledLink>
          </HomeBox>
        </HomeBoxRoot>

      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default HomePage;
