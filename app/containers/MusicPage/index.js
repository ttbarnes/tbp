/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';
import MusicPlayer from 'components/MusicPlayer';

const tempMusicData = [
  {
    id: 1,
    title: 'test title',
    url: 'https://soundcloud.com/ttonyb/ttox-play-him-like-a-machine',
    genre: 'bingo',
  },
  {
    id: 2,
    title: 'dummy title',
    url: 'https://soundcloud.com/ttonyb/tonyb-interlude-by-the-river',
    genre: 'bongo',
  },
  {
    id: 3,
    title: 'dummy title',
    url: 'https://soundcloud.com/ttonyb/tonyb-closing-bridge-unmastered',
    genre: 'fongo',
  },
];

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
          tempMusicData.map((t) =>
            <li key={t.id}>
              <MusicPlayer url={t.url} />
            </li>
          )
        }

      </article>
    );
  }
}

export default MusicPage;
