import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    return (
      <div>
        {!isHomePage && (
          <NavBar>
            <HeaderLink to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
            <HeaderLink to="/dev">dev</HeaderLink>
            <HeaderLink to="/music">music</HeaderLink>
            <HeaderLink to="/fpv">fpv</HeaderLink>
            <HeaderLink to="/timelapse">timelapse</HeaderLink>
            <HeaderLink to="/contact">contact</HeaderLink>
          </NavBar>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};


export default Header;
