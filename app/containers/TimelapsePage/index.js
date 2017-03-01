import React from 'react';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import H2 from '../../components/H2';
import A from '../../components/A';
import ListItem from '../../components/ListItem';

import timelapseData from '../../data/timelapse.json';

import {
  VideoFooter,
  FlexCol
} from './styled';

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

        <ul className="no-list-style">
          {
            timelapseData.map((t) => (
              <ListItem key={t.videoId}>
                <H2>{t.title}</H2>
                <p>{t.description}</p>
                <YouTube videoId={t.videoId} opts={youTubeOpts} />
                <VideoFooter>
                  <FlexCol>
                    <A href={`https://www.youtube.com/watch?v=${t.videoId}`} target="_blank">watch on youtube</A>
                  </FlexCol>
                </VideoFooter>
              </ListItem>
            ))
          }
        </ul>

      </article>
    );
  }
}

export default TimelapsePage;
