import React, { PropTypes } from 'react';
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
  ListRoot,
  ListItem,
  StyledLink
} from './styled';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <ListRoot>
          <ListItem aria-label="Twitter">
            <StyledLink to={SOCIAL_TWITTER} target="_blank">
              <IconTwitter />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="Github">
            <StyledLink to={SOCIAL_GITHUB} target="_blank">
              <IconGithub />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="StackOverflow">
            <StyledLink to={SOCIAL_STACKOVERFLOW} target="_blank">
              <IconStackOverflow />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="LinkedIn">
            <StyledLink to={SOCIAL_LINKEDIN} target="_blank">
              <IconLinkedIn />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="SoundCloud">
            <StyledLink to={SOCIAL_SOUNDCLOUD} target="_blank">
              <IconSoundCloud />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="YouTube">
            <StyledLink to={SOCIAL_YOUTUBE} target="_blank">
              <IconYouTube />
            </StyledLink>
          </ListItem>
        </ListRoot>
      </Root>
    );
  }
}

Footer.propTypes = {
  location: PropTypes.object
};

export default Footer;
