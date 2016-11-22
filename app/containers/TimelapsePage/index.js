/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';

export class TimelapsePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <article>

        <Helmet
          title="Timelapse"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        <p>TimelapsePage</p>

      </article>
    );
  }
}

export default TimelapsePage;
