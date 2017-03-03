import React from 'react';
import Helmet from 'react-helmet';
import { Root, Link } from './styled';

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

        <Link href="mailto:tony@tonybarnes.me">tony[at]tonybarnes.me</Link>

      </Root>
    );
  }
}

export default (ContactPage);
