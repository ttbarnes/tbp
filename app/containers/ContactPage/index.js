import React from 'react';
import Helmet from 'react-helmet';
import H1 from '../../components/H1';
import {
  Root,
  StyledLink
} from './styled';

export class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Root>

        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Contact Tony' },
          ]}
        />

        <H1>Contact</H1>
        <p>I{'\''}d love to talk, i{'\''}m very friendly!</p>
        <StyledLink href="mailto:tony@tonybarnes.me">tony[at]tonybarnes.me</StyledLink>

      </Root>
    );
  }
}

export default (ContactPage);
