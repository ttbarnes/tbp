import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';
import Footer from './index';
import {
  IconGithub,
  IconLinkedIn,
  IconStackOverflow,
  IconTwitter
} from '../../components/Icons';
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
  SOCIAL_TWITTER
} from '../../constants';
import {
  Root,
  ListItem,
  StyledLink
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
          <StyledLink href={SOCIAL_TWITTER} target="_blank" rel="noopener">
            <IconTwitter />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('github', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="Github">
          <StyledLink href={SOCIAL_GITHUB} target="_blank" rel="noopener">
            <IconGithub />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('stackoverflow', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="StackOverflow">
          <StyledLink href={SOCIAL_STACKOVERFLOW} target="_blank" rel="noopener">
            <IconStackOverflow />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
    it('linkedin', () => {
      const actual = wrapper.containsMatchingElement(
        <ListItem aria-label="LinkedIn">
          <StyledLink href={SOCIAL_LINKEDIN} target="_blank" rel="noopener">
            <IconLinkedIn />
          </StyledLink>
        </ListItem>
      );
      expect(actual).toBeTruthy();
    });
  });
});
