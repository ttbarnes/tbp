/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';

export class FpvPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <article>

        <Helmet
          title="FPV"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        <p>FPVPage</p>

      </article>
    );
  }
}

export default FpvPage;
