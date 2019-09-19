import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  IconGithub,
  IconLinkedIn,
  IconStackOverflow,
  IconTwitter
} from '../Icons';

import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_STACKOVERFLOW,
  SOCIAL_TWITTER,
} from '../../constants';

import {
  Root,
  ListRoot,
  ListItem,
  StyledLink,
  StyledCopyright
} from './styled';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location && location.pathname === '/';

    return (
      <Root fullScreen={isHomePage}>
        <ListRoot>
          <ListItem aria-label="Twitter">
            <StyledLink href={SOCIAL_TWITTER} target="_blank" rel="noopener">
              <IconTwitter />
            </StyledLink>
          </ListItem>
          <ListItem aria-label="LinkedIn">
            <StyledLink href={SOCIAL_LINKEDIN} target="_blank" rel="noopener">
              <IconLinkedIn />
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
        </ListRoot>
        <StyledCopyright>
          &copy; Barnes Code Ltd. Company no: 09719405
        </StyledCopyright>
      </Root>
    );
  }
}

Footer.propTypes = {
  location: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  location: state.router.location
});


const ConnectedFooter = connect(
  mapStateToProps
)(Footer);

export default ConnectedFooter;
