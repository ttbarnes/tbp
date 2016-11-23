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
    url : 'http://soundcloud.com/ttonyb/asdf',
    genre: 'House'
  },
  {
    id: 2,
    title: 'dummy title',
    url : 'http://soundcloud.com/ttonyb/qwerty',
    genre: 'House'
  },
  {
    id: 3,
    title: 'dummy title',
    url : 'http://soundcloud.com/ttonyb/qwerty',
    genre: 'Downtempo'
  }
];

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

        {
          tempMusicData.map((t) => {
            return (
              <li key={t.id}>
                {t.title}
                <MusicPlayer />
              </li>
            )
          })
        }


      </article>
    );
  }
}

export default MusicPage;
