import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Footer from './index';
import {
  IconGithub,
  IconLinkedIn,
  IconStackOverflow,
  IconSoundCloud,
  IconTwitter,
  IconYouTube
} from '../../components/Icons';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
  SOCIAL_SOUNDCLOUD,
  SOCIAL_TWITTER,
  SOCIAL_YOUTUBE
} from '../../constants';
import {
  Root,
  ListItem,
  StyledLink,
  ListItemNoIcon
} from './styled';

const mockLocation = { pathname: '/about' };
const mockLocationHome = { pathname: '/' };

describe('<Footer />', () => {
  it('should not render if home page', () => {
    const wrapper = shallow(
      <Footer location={mockLocationHome} />
    );
    const actual = wrapper.find(Root);
    expect(actual.length).toEqual(0);
  });

  describe('should render a link to...', () => {
    const wrapper = shallow(
      <Footer location={mockLocation} />
    );
    it('twitter', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="Twitter">
          <StyledLink to={SOCIAL_TWITTER} target="_blank">
            <IconTwitter />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('github', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="Github">
          <StyledLink to={SOCIAL_GITHUB} target="_blank">
            <IconGithub />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('stackoverflow', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="StackOverflow">
          <StyledLink to={SOCIAL_STACKOVERFLOW} target="_blank">
            <IconStackOverflow />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('linkedin', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="LinkedIn">
          <StyledLink to={SOCIAL_LINKEDIN} target="_blank">
            <IconLinkedIn />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('soundcloud', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="SoundCloud">
          <StyledLink to={SOCIAL_SOUNDCLOUD} target="_blank">
            <IconSoundCloud />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('youtube', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="YouTube">
          <StyledLink to={SOCIAL_YOUTUBE} target="_blank">
            <IconYouTube />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('hobbies', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItemNoIcon>
          <StyledLink to="/hobbies">Hobbies</StyledLink>
        </ListItemNoIcon>
      );
      expect(actual).toBeTruthy();
    });
  });
});
