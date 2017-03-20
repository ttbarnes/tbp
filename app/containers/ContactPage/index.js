import React from 'react';
import Helmet from 'react-helmet';
import H1 from '../../components/H1';
import H2 from '../../components/H2';

export class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>

        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Contact Tony' },
          ]}
        />

        <H1>Contact</H1>
        <H2>I{'\''}d love to talk, i{'\''}m very friendly!</H2>
        <a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a>

      </article>
    );
  }
}

export default (ContactPage);
