import React, { PropTypes } from 'react';
import {
  Root,
  Nav,
  NavLink
} from './styled';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <Nav>
          <NavLink to="/">Tony Barnes</NavLink>
          <NavLink to="/dev">dev</NavLink>
          <NavLink to="/music">music</NavLink>
          <NavLink to="/fpv">fpv</NavLink>
          <NavLink to="/timelapse">timelapse</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </Nav>
      </Root>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};


export default Header;
