import React from 'react';
import Helmet from 'react-helmet';
import {
  Root,
  HomeBox,
  StyledLink
} from './styled';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Root>
        <Helmet
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />

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

      </Root>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default HomePage;
