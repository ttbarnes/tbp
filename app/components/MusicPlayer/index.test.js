import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import MusicPlayer from './index';
import Track from './Track';

const mockUrl = 'http://soundcloud.com/ttonyb/something';

describe('<MusicPlayer />', () => {
  it('should render a <SoundPlayerContainer /> with <Track />', () => {
    const wrapper = shallow(
      <MusicPlayer url={mockUrl} />
    );
    const actual = wrapper.containsMatchingElement(
      <SoundPlayerContainer
        clientId="lzDYm6cMXxTW4NmEeNmnQLKnCaVDgRNo"
        resolveUrl={mockUrl}
      >
        <Track />
      </SoundPlayerContainer>
    );
    expect(actual).toBeTruthy();
  });
});
