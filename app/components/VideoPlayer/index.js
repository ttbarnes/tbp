import React, { PropTypes } from 'react';
import YouTube from 'react-youtube';
import H2 from '../../components/H2';
import A from '../../components/A';
import { VideoFooter } from './styled';

export const youTubeOpts = {
  playerVars: {
    showinfo: 0
  }
};

const VideoPlayer = (props) => {
  const { video } = props;
  if (!video) {
    return null;
  }

  return (
    <article>
      <H2>{video.title}</H2>
      <p>{video.description}</p>
      <YouTube videoId={video.videoId} opts={youTubeOpts} />
      <VideoFooter>
        <A href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank">Watch on YouTube</A>
      </VideoFooter>
    </article>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object
};

export default VideoPlayer;
