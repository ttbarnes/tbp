import React from 'react';
import Helmet from 'react-helmet';
import MusicPlayer from 'components/MusicPlayer';
import musicData from '../../data/music.json';

export class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <article>

        <Helmet
          title="Music"
          meta={[
            { name: 'description', content: 'TonyB, ttox, etc....' },
          ]}
        />

        {
          musicData.map((track) =>
            <li key={track.url}>
              <MusicPlayer url={track.url} />
            </li>
          )
        }

      </article>
    );
  }
}

export default MusicPage;
