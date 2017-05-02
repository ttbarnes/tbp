import React, { PropTypes } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

import Track from './Track';

const clientId = 'lzDYm6cMXxTW4NmEeNmnQLKnCaVDgRNo';

const MusicPlayer = (props) => {
  const { url } = props;
  return (
    <article>

      <SoundPlayerContainer
        clientId={clientId}
        resolveUrl={url}
      >

        <Track />

      </SoundPlayerContainer>

    </article>
  );
};


MusicPlayer.propTypes = {
  url: PropTypes.string.isRequired
};

export default MusicPlayer;
