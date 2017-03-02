/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';

import A from 'components/A';

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

        <A href="mailto:tony@tonybarnes.me">tony[at]tonybarnes.me</A>

      </article>
    );
  }
}

export default (ContactPage);
