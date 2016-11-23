import React from 'react';
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const { SoundCloudLogoSVG } = Icons;

const clientId = 'TBC';
const streamUrl = 'https://api.soundcloud.com/tracks/200494743/stream';


function MusicPlayer() {
  return (    
    <p>music player here</p>
    // <SoundPlayerContainer streamUrl={streamUrl} clientId={clientId}>
        // {/* your custom player components */}
    // </SoundPlayerContainer>
  )
}

export default MusicPlayer;
