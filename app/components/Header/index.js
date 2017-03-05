import React, { PropTypes } from 'react';
import {
  Root,
  Nav,
  NavLinkRoot,
  NavLink,
  NavChildRoot
} from './styled';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { location } = this.props;
    const isHomePage = location.pathname === '/';
    const isDevPage = location.pathname === '/dev';

    if (isHomePage) {
      return null;
    }

    return (
      <Root>
        <Nav>
          <NavLinkRoot to="/" activeClassName="active"><b>Tony Barnes</b></NavLinkRoot>
          <br />
          <NavLink to="/dev" activeClassName="active">dev</NavLink>
          {isDevPage && (
            <NavChildRoot>
              <NavLink to="/dev/projects" activeClassName="active">projects</NavLink>
              <NavLink to="/dev/about" activeClassName="active">about</NavLink>
            </NavChildRoot>
          )}
          <NavLink to="/non-dev" activeClassName="active">non-dev</NavLink>
          <NavLink to="/contact" activeClassName="active">contact</NavLink>
        </Nav>
      </Root>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};


export default Header;
