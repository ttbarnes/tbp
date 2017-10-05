import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
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

        <H1 hide>Contact</H1>
        <H2 h1Size>I{'\''}d love to talk, i{'\''}m very friendly!</H2>
        <p><a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a></p>
        <p><Link to="http://twitter.com/ttbarnes" target="_blank" rel="noopener">{'@'}ttbarnes</Link></p>

      </article>
    );
  }
}

export default (ContactPage);
