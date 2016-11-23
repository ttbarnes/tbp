/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';

import ContactForm from 'components/ContactForm';

export class ContactPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <article>

        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        <p>ContactPage</p>
        <ContactForm />

      </article>
    );
  }
};

export default (ContactPage);
