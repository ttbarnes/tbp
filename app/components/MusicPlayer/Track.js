import React, { PropTypes } from 'react';
import H2 from 'components/H2';
import {
  RootFlex,
  InlineElm,
  ColArtwork,
  ColDetails,
  SubHeading,
  ImgWrap,
  StyledImg,
  StyledButtonPlay,
  StyledTimer,
  StyledProgress,
  StyledA
} from './styled';

const Track = (props) => {
  const {
    track,
    currentTime,
    duration
  } = props;

  if (!track) {
    return null;
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

        <StyledA href={track.permalink_url} target="_blank" rel="noopener">Listen on SoundCloud</StyledA>

      </ColDetails>

    </RootFlex>
  );
};

Track.propTypes = {
  track: PropTypes.object,
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  soundCloudAudio: PropTypes.object
};

export default Track;
