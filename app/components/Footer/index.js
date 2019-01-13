import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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
  StyledLink,
  StyledNavLink,
  ListItemNoIcon
} from './styled';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location && location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <ListRoot>
          <ListItem aria-label="Twitter">
            <StyledLink href={SOCIAL_TWITTER} target="_blank" rel="noopener">
              <IconTwitter />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="Github">
            <StyledLink href={SOCIAL_GITHUB} target="_blank" rel="noopener">
              <IconGithub />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="StackOverflow">
            <StyledLink href={SOCIAL_STACKOVERFLOW} target="_blank" rel="noopener">
              <IconStackOverflow />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="LinkedIn">
            <StyledLink href={SOCIAL_LINKEDIN} target="_blank" rel="noopener">
              <IconLinkedIn />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="SoundCloud">
            <StyledLink href={SOCIAL_SOUNDCLOUD} target="_blank" rel="noopener">
              <IconSoundCloud />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="YouTube">
            <StyledLink href={SOCIAL_YOUTUBE} target="_blank" rel="noopener">
              <IconYouTube />
            </StyledLink>
          </ListItem>
          <ListItemNoIcon>
            <StyledNavLink to="/hobbies">Hobbies</StyledNavLink>
          </ListItemNoIcon>
        </ListRoot>
      </Root>
    );
  }
}

Footer.propTypes = {
  location: PropTypes.object
};

const mapStateToProps = (state) => ({
  location: state.route.location,
});

const ConnectedFooter = connect(
  mapStateToProps
)(Footer);

export default ConnectedFooter;
