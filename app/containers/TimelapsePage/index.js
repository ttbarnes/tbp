import React from 'react';
import Helmet from 'react-helmet';
import YouTube from 'react-youtube';
import H2 from '../../components/H2';
import A from '../../components/A';
import ListItem from '../../components/ListItem';
import {
  VideoFooter,
  FlexCol
} from './styled';

const data = [
  {
    title: 'Cycling in Essex',
    videoId: 'VHusMdGaOoU',
    description: 'Testing out my GoPro. 40 mile cycle.'
  },
  {
    title: 'Night lapse stars test',
    videoId: 'HVvcGT2bWEo',
    description: 'Testing out the night lapse setting on my GoPro.'
  },
  {
    title: 'Canal boat time lapse (2 hours) - Aldermaston to Devizes Summer 2016',
    videoId: 'fKgHG4c1iA8',
    description: 'Time lapse from a 2 week family canal boat holiday in Berkshire and Wiltshire: (Aldermaston - Devizes - Aldermaston). The hire boat is called \'Shorelark\'. Recorded with a GoPro.'
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

        <ul className="no-list-style">
          {
            data.map((t) => (
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
