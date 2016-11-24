/*
 * DevPage
 *
 * Everything development related
 */

import React from 'react';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';

const data = [
  {
    title: 'Cycling in Essex',
    videoId: 'VHusMdGaOoU',
    description: 'Voluptas sit aspernatur aut odit aut fugit'
  },
  {
    title: 'Night lapse stars test',
    videoId: 'HVvcGT2bWEo',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
  },
  {
    title: 'Canal boat time lapse (2 hours) - Aldermaston to Devizes Summer 2016',
    videoId: 'fKgHG4c1iA8',
    description: 'Aspernatur aut odit aut fugit'
  }
];

const youTubeOpts = {
  playerVars: {
    showinfo: 0
  }
};

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

        {
          data.map(t => (
            <li key={t.videoId}>
              <h4>{t.title}</h4>
              <p>{t.description}</p>
              <YouTube videoId={t.videoId} opts={youTubeOpts} />
            </li>
          ))
        }

      </article>
    );
  }
}

export default TimelapsePage;
