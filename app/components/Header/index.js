import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        
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
      </div>
    );
  }
}

export default Header;
