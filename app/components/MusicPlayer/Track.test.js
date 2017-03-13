import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import moment from 'moment';
import H2 from 'components/H2';
import A from 'components/A';
import Track from './Track';
import {
  InlineElm,
  SubHeading,
  StyledImg,
  Date,
  StyledButtonPlay,
  StyledTimer,
  StyledProgress
} from './styled';

const mockProps = {
  track: {
    artwork_url: 'test.jpg',
    avatar_url: 'test2.jpg',
    title: 'Track title',
    genre: 'House',
    createdAt: new Date(),
    description: 'all the things!'
  },
  currentTime: 0,
  duration: '123',
  soundCloudAudio: {}
};

const mockPropsWithCurrentTime = {
  track: {
    artwork_url: 'test.jpg',
    avatar_url: 'test2.jpg',
    title: 'Track title',
    genre: 'House',
    createdAt: new Date(),
    description: 'all the things!',
    permalink_url: 'http://soundcloud.com/testpermalink'
  },
  currentTime: 0.2,
  duration: '123',
  soundCloudAudio: {}
};

describe('<Track />', () => {
  describe('<ColArtwork/>', () => {
    const wrapper = shallow(
      <Track {...mockProps} />
    );

    it('should render <StyledImg /> with correct props', () => {
      const actual = wrapper.containsMatchingElement(
        <StyledImg
          src={mockProps.track.artwork_url}
          alt={mockProps.track.title}
        />
      );
      expect(actual).toEqual(true);
    });

    it('should render <StyledButtonPlay/>', () => {
      const actual = wrapper.containsMatchingElement(
        <StyledButtonPlay {...mockProps} />
      );
      expect(actual).toBeTruthy();
    });
  });

  describe('<ColDetails />', () => {
    it('should have a heading', () => {
      const wrapper = shallow(
        <Track {...mockProps} />
      );
      const actual = wrapper.containsMatchingElement(
        <H2>{mockProps.track.title}</H2>
      );
      expect(actual).toBeTruthy();
    });

    describe('<SubHeading />', () => {
      it('should render with genre and date', () => {
        const wrapper = shallow(
          <Track {...mockProps} />
        );
        const actual = wrapper.containsMatchingElement(
          <SubHeading>
            <InlineElm>#{mockProps.track.genre}</InlineElm>
            <Date>{moment(mockProps.track.created_at).format('Do MMM YYYY')}</Date>
          </SubHeading>
        );
        expect(actual).toBeTruthy();
      });
      it('should render <StyledTimer/> if currentTime is > 0.1', () => {
        const wrapper = shallow(
          <Track {...mockPropsWithCurrentTime} />
        );
        const actual = wrapper.containsMatchingElement(
          <SubHeading>
            <InlineElm>#{mockPropsWithCurrentTime.track.genre}</InlineElm>
            <Date>{moment(mockPropsWithCurrentTime.track.created_at).format('Do MMM YYYY')}</Date>
            <StyledTimer
              duration={mockPropsWithCurrentTime.duration / 1000}
              currentTime={mockPropsWithCurrentTime.currentTime}
              {...mockPropsWithCurrentTime}
            />
          </SubHeading>
        );
        expect(actual).toBeTruthy();
      });
    });
    describe('<StyledProgress />', () => {
      const wrapper = shallow(
        <Track {...mockPropsWithCurrentTime} />
      );
      it('should be rendered if currentTime > 0.1', () => {
        const actual = wrapper.containsMatchingElement(
          <StyledProgress
            value={(mockPropsWithCurrentTime.currentTime / mockPropsWithCurrentTime.duration) * 100} // eslint-disable-line no-mixed-operators
            innerClassName="progress-bar-inner"
            soundCloudAudio={mockPropsWithCurrentTime.soundCloudAudio}
          />
        );
        expect(actual).toBeTruthy();
      });
    });
    it('should render a description', () => {
      const wrapper = shallow(
        <Track {...mockProps} />
      );
      const actual = wrapper.containsMatchingElement(
        <p className="no-margin">{mockProps.track.description}</p>
      );
      expect(actual).toBeTruthy();
    });
    it('should render a link to soundcloud', () => {
      const wrapper = shallow(
        <Track {...mockProps} />
      );
      const actual = wrapper.containsMatchingElement(
        <A href={mockProps.permalink_url}>Listen on SoundCloud</A>
      );
      expect(actual).toBeTruthy();
    });
  });
});
