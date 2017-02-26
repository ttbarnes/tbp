import React, { PropTypes } from 'react';
import { Timer, Progress } from 'react-soundplayer/components';
import moment from 'moment';
import H2 from 'components/H2';
import {
  Root,
  ColLeft,
  ColRight,
  ButtonPlay,
  GenreTag
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
        <ButtonPlay {...props} />
      </ColLeft>

      <ColRight>
        <H2 className="no-margin">{track.title} <GenreTag>{track.genre}</GenreTag></H2>
        <p className="no-margin"><small>{moment(track.created_at).format('Do MMM YYYY')}</small></p>
        {track.description && (
          <p className="no-margin">{track.description}</p>
        )}
        <Timer duration={track.duration / 1000} currentTime={currentTime} {...props} />

        <Progress
          value={(currentTime / track.duration) * 100 || 0}
          {...props}
        />

      </ColRight>

    </Root>
  );
};

Track.propTypes = {
  track: PropTypes.object,
  currentTime: PropTypes.number,
};

export default Track;
