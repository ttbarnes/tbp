import React from 'react';
import Helmet from 'react-helmet';
import ListItem from '../../components/ListItem';
import VideoPlayer from '../../components/VideoPlayer';
import timelapseData from '../../data/timelapse.json';

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
                <VideoPlayer video={t} />
              </ListItem>
            ))
          }
        </ul>

      </article>
    );
  }
}

export default TimelapsePage;
