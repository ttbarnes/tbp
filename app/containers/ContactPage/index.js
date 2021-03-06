import React from 'react';
import Helmet from 'react-helmet';
import PageContainer from '../PageContainer';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import { FadeIn } from '../../components/styledShared';

export class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PageContainer smallWidth>

        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Contact Tony' },
          ]}
        />

        <H1 hide>Contact</H1>
        <H2 h1Size>I{'\''}d love to talk, i{'\''}m very friendly!</H2>
        <FadeIn>
          <p><a href="mailto:tony@tonybarnes.me">tony{'@'}tonybarnes.me</a></p>
          <p><a href="http://twitter.com/ttbarnes" target="_blank" rel="noopener">{'@'}ttbarnes</a></p>
        </FadeIn>

      </PageContainer>
    );
  }
}

export default ContactPage;
