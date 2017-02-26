import React, { PropTypes } from 'react';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';

const clientId = 'lzDYm6cMXxTW4NmEeNmnQLKnCaVDgRNo';

const TrackInfo = (props) => {
  const { track, currentTime } = props;

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <img src="https://i1.sndcdn.com/artworks-000175440311-15b1dk-t250x250.jpg"/> */}
      <img src={track.artwork_url} alt={track.title} />
      <h2>{track.title}</h2>
      <p><small>{track.created_at}</small></p>
      {/* <div style={ {background: '#000' }}>
        <img src={track.waveform_url}/>
      </div> */}
      <Timer duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...props} />
    </div>
  );
};

TrackInfo.propTypes = {
  track: PropTypes.object,
  currentTime: PropTypes.number,
};

const MusicPlayer = (props) => {
  const { url } = props;
  return (
    <div>
      <SoundPlayerContainer
        clientId={clientId}
        resolveUrl={url}
      >
        <PlayButton />
        <TrackInfo />
      </SoundPlayerContainer>
    </div>
  );
};


MusicPlayer.propTypes = {
  url: PropTypes.string,
};

export default MusicPlayer;
