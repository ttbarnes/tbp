import React, { PropTypes } from 'react';
import moment from 'moment';
import H2 from 'components/H2';
import {
  RootFlex,
  InlineElm,
  ColArtwork,
  ColDetails,
  SubHeading,
  ImgWrap,
  StyledImg,
  Date,
  StyledButtonPlay,
  StyledTimer,
  StyledProgress
} from './styled';

const Track = (props) => {
  const {
    track,
    currentTime,
    duration,
  } = props;


  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <RootFlex>

      <ColArtwork>

        <ImgWrap>
          <StyledImg src={track.artwork_url || track.user.avatar_url} alt={track.title} />
          <StyledButtonPlay {...props} />
        </ImgWrap>

      </ColArtwork>

      <ColDetails>
        <H2>{track.title}</H2>
        <SubHeading>
          <InlineElm>#{track.genre}</InlineElm>
          <Date>{moment(track.created_at).format('Do MMM YYYY')}</Date>
          {currentTime > 0.1 &&
            <StyledTimer duration={duration / 1000} currentTime={currentTime} {...props} />
          }
        </SubHeading>

        <br />

        {currentTime > 0.1 &&
          <StyledProgress
            value={(currentTime / duration) * 100 || 0}
            innerClassName="progress-bar-inner"
            soundCloudAudio={props.soundCloudAudio}
          />
        }

        <br />

        {track.description && (
          <p className="no-margin">{track.description}</p>
        )}

      </ColDetails>

    </RootFlex>
  );
};

Track.propTypes = {
  track: PropTypes.object.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  soundCloudAudio: PropTypes.object.isRequired
};

export default Track;
