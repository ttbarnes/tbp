import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ListItem from '../../components/ListItem';
import VideoPlayer from '../../components/VideoPlayer';
import {
  selectFpvVideos
} from './selectors';

export class FpvPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let { videos } = this.props;
    if (videos) {
      videos = videos.toJS();
    }

    return (
      <article>

        <Helmet
          title="FPV"
          meta={[
            { name: 'description', content: 'First Person View' },
          ]}
        />

        {!videos ? (
          <p>Unable to load fpv videos at the moment.</p>
        ) : (
          <ul className="no-list-style">
            {videos.map((video) => (
              <ListItem key={video.videoId}>
                <VideoPlayer video={video} />
              </ListItem>
            ))}
          </ul>
        )}

      </article>
    );
  }
}

FpvPage.propTypes = {
  videos: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  videos: selectFpvVideos()
});

export default connect(mapStateToProps, {})(FpvPage);
