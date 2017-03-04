import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ListItem from '../../components/ListItem';
import VideoPlayer from '../../components/VideoPlayer';
import { selectTimelapseVideos } from './selectors';

export class TimelapsePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    let { videos } = this.props;
    if (videos) {
      videos = videos.toJS();
    }

    return (
      <article>

        <Helmet
          title="Timelapse"
          meta={[
            { name: 'description', content: 'Timelapse videos' },
          ]}
        />

        {!videos ? (
          <p>Unable to load timelapse videos at the moment.</p>
        ) : (
          <ul className="no-list-style">
            {
              videos.map((video) => (
                <ListItem key={video.videoId}>
                  <VideoPlayer video={video} />
                </ListItem>
              ))
            }
          </ul>
        )}

      </article>
    );
  }
}

TimelapsePage.propTypes = {
  videos: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  videos: selectTimelapseVideos()
});

export default connect(mapStateToProps, {})(TimelapsePage);
