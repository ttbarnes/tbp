import React from 'react';
import Helmet from 'react-helmet';
import ListItem from '../../components/ListItem';
import VideoPlayer from '../../components/VideoPlayer';
import fpvData from '../../data/fpv.json';

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

        <ul className="no-list-style">
          {
            fpvData.map((t) => (
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

export default FpvPage;
