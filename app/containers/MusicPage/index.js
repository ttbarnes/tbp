/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';
import MusicPlayer from 'components/MusicPlayer';

export class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <article>

        <Helmet
          title="Music"
          meta={[
            { name: 'description', content: 'Dev things' },
          ]}
        />

        <p>MusicPage</p>

        <MusicPlayer/>

      </article>
    );
  }
}

export default MusicPage;
