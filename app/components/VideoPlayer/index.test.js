import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import YouTube from 'react-youtube';
import H2 from '../../components/H2';
import A from '../../components/A';
import VideoPlayer, { youTubeOpts } from './index';
import { VideoFooter } from './styled';

const mockProps = {
  title: 'My title',
  videoId: 'asdf1234',
  description: 'All the things',
  type: 'timelapse'
};

describe('<VideoPlayer />', () => {
  it('should render a heading and description', () => {
    const wrapper = shallow(
      <VideoPlayer video={mockProps} />
    );
    const title = wrapper.containsMatchingElement(
      <H2>{mockProps.title}</H2>
    );
    expect(title).toBeTruthy();
    const description = wrapper.containsMatchingElement(
      <p>{mockProps.description}</p>
    );
    expect(description).toBeTruthy();
  });

  it('should render <YouTube />', () => {
    const wrapper = shallow(
      <VideoPlayer video={mockProps} />
    );
    const actual = wrapper.containsMatchingElement(
      <YouTube videoId={mockProps.videoId} opts={youTubeOpts} />
    );
    expect(actual).toBeTruthy();
  });

  it('should render <VideoFooter />', () => {
    const wrapper = shallow(
      <VideoPlayer video={mockProps} />
    );
    const actual = wrapper.containsMatchingElement(
      <VideoFooter>
        <A href={`https://www.youtube.com/watch?v=${mockProps.videoId}`} target="_blank" rel="noopener">Watch on YouTube</A>
      </VideoFooter>
    );
    expect(actual).toBeTruthy();
  });
});
