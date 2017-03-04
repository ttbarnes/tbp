import React, { PropTypes } from 'react';
import {
  IconGithub,
  IconLinkedIn,
  IconStackOverflow,
  IconSoundCloud,
  IconTwitter,
  IconYouTube
} from '../../components/Icons';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <nav>
        <ul className="no-list-style">
          <li aria-label="Twitter">
            <IconTwitter />
          </li>
          <li aria-label="Github">
            <IconGithub />
          </li>
          <li aria-label="StackOverflow">
            <IconStackOverflow />
          </li>
          <li aria-label="LinkedIn">
            <IconLinkedIn />
          </li>
          <li aria-label="SoundCloud">
            <IconSoundCloud />
          </li>
          <li aria-label="YouTube">
            <IconYouTube />
          </li>
        </ul>
      </nav>
    );
  }
}

Footer.propTypes = {
  location: PropTypes.object
};

export default Footer;
