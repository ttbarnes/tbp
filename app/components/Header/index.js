import React, { PropTypes } from 'react';
import {
  Root,
  Nav,
  NavLinkRoot,
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
          <NavLinkRoot to="/" activeClassName="active">Tony Barnes</NavLinkRoot>
          <NavLink to="/dev" activeClassName="active">dev</NavLink>
          <NavLink to="/music" activeClassName="active">music</NavLink>
          <NavLink to="/fpv" activeClassName="active">fpv</NavLink>
          <NavLink to="/timelapse" activeClassName="active">timelapse</NavLink>
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
