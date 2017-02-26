import React, { PropTypes } from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';

import {
  Root,
  ColLeft,
  ColRight
} from './styledTrack';

const Track = (props) => {
  const { track, currentTime } = props;

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <Root>

      <ColLeft>
        <img src={track.artwork_url || track.user.avatar_url} alt={track.title} />
        <br />
        <PlayButton {...props} />
      </ColLeft>

      <ColRight>
        <h2>{track.title}</h2>
        <p>{track.description}</p>
        <p>{track.genre}</p>
        <p><small>{track.created_at}</small></p>
        <Timer duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...props} />
      </ColRight>

    </Root>
  );
};

Track.propTypes = {
  track: PropTypes.object,
  currentTime: PropTypes.number,
};

export default Track;
