import React, { PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

import { StyledMusicPlayer } from './styledMusicPlayer';
import Track from './Track';

const clientId = 'lzDYm6cMXxTW4NmEeNmnQLKnCaVDgRNo';

const MusicPlayer = (props) => {
  const { url } = props;
  return (
    <StyledMusicPlayer>

      <SoundPlayerContainer
        clientId={clientId}
        resolveUrl={url}
      >

        <Track />

      </SoundPlayerContainer>

    </StyledMusicPlayer>
  );
};


MusicPlayer.propTypes = {
  url: PropTypes.string,
};

export default MusicPlayer;
